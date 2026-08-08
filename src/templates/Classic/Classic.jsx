import "./Classic.css"
function formatDate(date) {

  if (!date) {
    return "YOUR WEDDING DATE";
  }

  const dateObject = new Date(
    `${date}T00:00:00`
  );

  return dateObject.toLocaleDateString(
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
    return "YOUR WEDDING TIME";
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

function Classic({ wedding }) {

  return (
    <div className="invitation classic-invitation">

      <div className="classic-inner">

        <div className="invitation-top">
          <span>
            WEDDING INVITATION
          </span>
        </div>

        <p className="invitation-small">
          Together with their families
        </p>

        <div className="couple">

          <h1>
            {wedding.brideName || "Bride"}
          </h1>

          <div className="and">
            &
          </div>

          <h1>
            {wedding.groomName || "Groom"}
          </h1>

        </div>

        <p className="invitation-message">
          request the pleasure of your company
          on their special day.
        </p>

        <div className="event-details">

          <div>
            <span>DATE</span>
            <strong>
              {formatDate(
                wedding.weddingDate
              )}
            </strong>
          </div>

          <div>
            <span>TIME</span>
            <strong>
              {formatTime(
                wedding.weddingTime
              )}
            </strong>
          </div>

          <div>
            <span>VENUE</span>
            <strong>
              {wedding.venueName ||
                "Wedding Venue"}
            </strong>

            <p>
              {wedding.address ||
                "Wedding Address"}
            </p>
          </div>

        </div>

        {wedding.googleMapsUrl && (
          <a
            href={wedding.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="map-button"
          >
            Get Directions
          </a>
        )}

      </div>

    </div>
  );
}

export default Classic;