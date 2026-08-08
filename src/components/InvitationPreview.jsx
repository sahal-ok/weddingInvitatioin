import Classic from "../templates/Classic/Classic";
import Modern from "../templates/Modern/Modern";
import Floral from "../templates/Floral/Floral";
import Muslim from "../templates/Muslim/Muslim";

function InvitationPreview({ wedding }) {

  if (wedding.template === "modern") {
    return <Modern wedding={wedding} />;
  }
  if (wedding.template === "muslim") {
    return <Muslim wedding={wedding} />;
  }
  if (wedding.template === "floral") {
    return <Floral wedding={wedding} />;
  }

  return <Classic wedding={wedding} />;
}

export default InvitationPreview;