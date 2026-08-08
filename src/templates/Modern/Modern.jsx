import "./Modern.css"
function formatDate(date) {

  if (!date) {
    return "DATE";
  }

  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}

function formatTime(time) {

  if (!time) {
    return "TIME";
  }

  const [hours, minutes] = time.split(":");

  const date = new Date();

  date.setHours(
    Number(hours),
    Number(minutes)
  );

  return date.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
    }
  );
}

function Modern({ wedding }) {

  return (
    <div className="invitation modern-invitation">

      <div className="modern-inner">

        <p className="modern-label">
          THE WEDDING OF
        </p>

        <div className="modern-couple">

          <h1>
            {wedding.brideName || "BRIDE"}
          </h1>

          <div className="modern-x">
            ×
          </div>

          <h1>
            {wedding.groomName || "GROOM"}
          </h1>

        </div>

        <div className="modern-line" />

        <div className="modern-details">

          <strong>
            {formatDate(
              wedding.weddingDate
            )}
          </strong>

          <span>
            {formatTime(
              wedding.weddingTime
            )}
          </span>

          <strong>
            {wedding.venueName ||
              "VENUE"}
          </strong>

          <p>
            {wedding.address ||
              "LOCATION"}
          </p>

        </div>

        {wedding.googleMapsUrl && (
          <a
            href={wedding.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="modern-map-button"
          >
            VIEW LOCATION →
          </a>
        )}

      </div>

    </div>
  );
}

export default Modern;