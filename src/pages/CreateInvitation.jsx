import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import WeddingForm from "../components/WeddingForm";
import TemplateSelector from "../components/TemplateSelector";
import InvitationPreview from "../components/InvitationPreview";

function CreateInvitation() {

  const navigate = useNavigate();

  const [wedding, setWedding] = useState({
    brideName: "",
    groomName: "",
    weddingDate: "",
    weddingTime: "",
    venueName: "",
    address: "",
    googleMapsUrl: "",
    template: "classic",
  });

  const [publishing, setPublishing] =
    useState(false);

  const [error, setError] =
    useState("");

  const publishInvitation = async () => {

    setError("");

    if (
      !wedding.brideName ||
      !wedding.groomName ||
      !wedding.weddingDate ||
      !wedding.venueName
    ) {
      setError(
        "Please fill in the bride, groom, date and venue."
      );

      return;
    }

    try {

      setPublishing(true);

      const docRef = await addDoc(
        collection(db, "weddings"),
        {
          ...wedding,
          createdAt: serverTimestamp(),
        }
      );

      navigate(
        `/invite/${docRef.id}`
      );

    } catch (error) {

      console.error(error);

      setError(
        "Something went wrong while publishing."
      );

    } finally {

      setPublishing(false);

    }
  };

  return (
    <div className="create-page">

      <header className="create-header">

        <div className="logo">
          WedInvite
        </div>

        <span>
          Create your invitation
        </span>

      </header>

      <main className="builder">

        <section className="builder-sidebar">

          <WeddingForm
            wedding={wedding}
            setWedding={setWedding}
          />

          <TemplateSelector
            wedding={wedding}
            setWedding={setWedding}
          />

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            className="publish-button"
            onClick={publishInvitation}
            disabled={publishing}
          >
            {publishing
              ? "Publishing..."
              : "Publish Invitation"}
          </button>

        </section>

        <section className="builder-preview">

          <div className="preview-label">
            LIVE PREVIEW
          </div>

          <div className="phone-frame">

            <InvitationPreview
              wedding={wedding}
            />

          </div>

        </section>

      </main>

    </div>
  );
}

export default CreateInvitation;