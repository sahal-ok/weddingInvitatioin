import "./Muslim.css";

function formatDate(date) {
  if (!date) return "YOUR WEDDING DATE";

  return new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
}

function formatTime(time) {
  if (!time) return "YOUR WEDDING TIME";

  const [hours, minutes] = time.split(":");

  const date = new Date();

  date.setHours(Number(hours), Number(minutes));

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function Muslim({ wedding }) {
  return (
    <div className="muslim-invitation">

      <div className="muslim-pattern" />

      <div className="muslim-crescent">
        ☾
      </div>

      <div className="muslim-inner">

        <div className="muslim-top-decoration">
          ✦
        </div>

        <p className="muslim-bismillah">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        <p className="muslim-small">
          IN THE NAME OF ALLAH,
          <br />
          THE MOST GRACIOUS, THE MOST MERCIFUL
        </p>

        <div className="muslim-divider">
          <span>✦</span>
        </div>

        <p className="muslim-invited">
          With the blessings of Allah
        </p>

        <p className="muslim-request">
          We request the honour of your presence
          <br />
          at the Nikah ceremony of
        </p>

        <div className="muslim-couple">

          <h1>
            {wedding.brideName || "Bride"}
          </h1>

          <div className="muslim-and">
            &
          </div>

          <h1>
            {wedding.groomName || "Groom"}
          </h1>

        </div>

        <div className="muslim-divider">
          <span>❖</span>
        </div>

        <div className="muslim-event">

          <div className="muslim-event-item">
            <span className="muslim-label">
              DATE
            </span>

            <strong>
              {formatDate(wedding.weddingDate)}
            </strong>
          </div>

          <div className="muslim-event-item">
            <span className="muslim-label">
              TIME
            </span>

            <strong>
              {formatTime(wedding.weddingTime)}
            </strong>
          </div>

          <div className="muslim-event-item">

            <span className="muslim-label">
              VENUE
            </span>

            <strong>
              {wedding.venueName || "Wedding Venue"}
            </strong>

            <p>
              {wedding.address || "Wedding Address"}
            </p>

          </div>

        </div>

        {wedding.googleMapsUrl && (
          <a
            href={wedding.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="muslim-map-button"
          >
            GET DIRECTIONS
          </a>
        )}

        <div className="muslim-bottom-decoration">
          ✦
        </div>

      </div>
    </div>
  );
}

export default Muslim;