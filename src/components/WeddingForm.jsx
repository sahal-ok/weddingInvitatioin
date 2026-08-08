function WeddingForm({ wedding, setWedding }) {

  const updateField = (field, value) => {
    setWedding((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <div className="form-container">

      <div className="form-heading">
        <p className="eyebrow">
          STEP 1
        </p>

        <h2>
          Wedding details
        </h2>

        <p>
          Tell us about your special day.
        </p>
      </div>

      <div className="form-group">

        <label>
          Bride's Name
        </label>

        <input
          type="text"
          placeholder="e.g. Aisha"
          value={wedding.brideName}
          onChange={(e) =>
            updateField(
              "brideName",
              e.target.value
            )
          }
        />

      </div>

      <div className="form-group">

        <label>
          Groom's Name
        </label>

        <input
          type="text"
          placeholder="e.g. Sahal"
          value={wedding.groomName}
          onChange={(e) =>
            updateField(
              "groomName",
              e.target.value
            )
          }
        />

      </div>

      <div className="form-row">

        <div className="form-group">

          <label>
            Wedding Date
          </label>

          <input
            type="date"
            value={wedding.weddingDate}
            onChange={(e) =>
              updateField(
                "weddingDate",
                e.target.value
              )
            }
          />

        </div>

        <div className="form-group">

          <label>
            Wedding Time
          </label>

          <input
            type="time"
            value={wedding.weddingTime}
            onChange={(e) =>
              updateField(
                "weddingTime",
                e.target.value
              )
            }
          />

        </div>

      </div>

      <div className="form-group">

        <label>
          Venue
        </label>

        <input
          type="text"
          placeholder="e.g. Grand Auditorium"
          value={wedding.venueName}
          onChange={(e) =>
            updateField(
              "venueName",
              e.target.value
            )
          }
        />

      </div>

      <div className="form-group">

        <label>
          Address
        </label>

        <textarea
          placeholder="e.g. Kozhikode, Kerala"
          value={wedding.address}
          onChange={(e) =>
            updateField(
              "address",
              e.target.value
            )
          }
        />

      </div>

      <div className="form-group">

        <label>
          Google Maps URL
        </label>

        <input
          type="url"
          placeholder="https://maps.google.com/..."
          value={wedding.googleMapsUrl}
          onChange={(e) =>
            updateField(
              "googleMapsUrl",
              e.target.value
            )
          }
        />

        <small className="input-help">
          Paste the Google Maps link for your venue.
        </small>

      </div>

    </div>
  );
}

export default WeddingForm;