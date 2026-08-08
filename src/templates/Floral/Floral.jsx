import "./Floral.css"

function formatDate(date) {

  if (!date) {
    return "Your Special Day";
  }

  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
}

function formatTime(time) {

  if (!time) {
    return "Time";
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

function Floral({ wedding }) {

  return (
    <div className="invitation floral-invitation">

      <div className="floral-decoration">
        ❀
      </div>

      <div className="floral-inner">

        <p className="floral-small">
          TOGETHER WITH LOVE
        </p>

        <h1>
          {wedding.brideName || "Bride"}
        </h1>

        <span className="floral-and">
          &
        </span>

        <h1>
          {wedding.groomName || "Groom"}
        </h1>

        <p className="floral-message">
          We invite you to celebrate
          our beginning.
        </p>

        <div className="floral-details">

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
              "Wedding Venue"}
          </strong>

          <p>
            {wedding.address ||
              "Wedding Address"}
          </p>

        </div>

        {wedding.googleMapsUrl && (
          <a
            href={wedding.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="floral-map-button"
          >
            Find Us
          </a>
        )}

      </div>

    </div>
  );
}

export default Floral;