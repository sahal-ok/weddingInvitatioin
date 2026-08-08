import Classic from "../templates/Classic";
import Modern from "../templates/Modern";
import Floral from "../templates/Floral";

function InvitationPreview({ wedding }) {

  if (wedding.template === "modern") {
    return <Modern wedding={wedding} />;
  }

  if (wedding.template === "floral") {
    return <Floral wedding={wedding} />;
  }

  return <Classic wedding={wedding} />;
}

export default InvitationPreview;