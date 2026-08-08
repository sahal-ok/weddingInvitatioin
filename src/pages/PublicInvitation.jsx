import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import InvitationPreview from "../components/InvitationPreview";

function PublicInvitation() {

  const { id } = useParams();

  const [wedding, setWedding] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const fetchInvitation = async () => {

      try {

        const weddingRef =
          doc(db, "weddings", id);

        const weddingSnapshot =
          await getDoc(weddingRef);

        if (!weddingSnapshot.exists()) {

          setError(
            "Invitation not found."
          );

          return;
        }

        setWedding({
          id: weddingSnapshot.id,
          ...weddingSnapshot.data(),
        });

      } catch (error) {

        console.error(error);

        setError(
          "Unable to load invitation."
        );

      } finally {

        setLoading(false);

      }
    };

    fetchInvitation();

  }, [id]);

  if (loading) {

    return (
      <div className="loading-page">
        <p>
          Loading invitation...
        </p>
      </div>
    );

  }

  if (error) {

    return (
      <div className="loading-page">

        <h2>
          {error}
        </h2>

        <p>
          Please check the invitation link.
        </p>

      </div>
    );

  }

  return (
    <div className="public-invitation">

      <InvitationPreview
        wedding={wedding}
      />

      <div className="share-section">

        <button
          onClick={() => {

            const url =
              window.location.href;

            navigator.clipboard.writeText(url);

            alert(
              "Invitation link copied!"
            );

          }}
        >
          Copy Invitation Link
        </button>

        <button
          onClick={() => {

            const url =
              encodeURIComponent(
                window.location.href
              );

            const text =
              encodeURIComponent(
                "You're invited to our wedding! 💍"
              );

            window.open(
              `https://wa.me/?text=${text}%20${url}`,
              "_blank"
            );

          }}
        >
          Share on WhatsApp
        </button>

      </div>

    </div>
  );
}

export default PublicInvitation;