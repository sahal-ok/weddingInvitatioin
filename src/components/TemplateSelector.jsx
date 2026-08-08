function TemplateSelector({
  wedding,
  setWedding,
}) {

  const selectTemplate = (template) => {

    setWedding((previous) => ({
      ...previous,
      template,
    }));

  };

  return (
    <div className="template-selector">

      <div className="form-heading">

        <p className="eyebrow">
          STEP 2
        </p>

        <h2>
          Choose a design
        </h2>

      </div>

      <div className="template-options">

        <button
          className={`template-option ${
            wedding.template === "classic"
              ? "selected"
              : ""
          }`}
          onClick={() =>
            selectTemplate("classic")
          }
        >
          <div className="mini-preview classic-card">
            <span>WEDDING</span>

            <strong>
              Aisha
              <br />
              &
              <br />
              Sahal
            </strong>
          </div>

          <span className="template-name">
            Classic
          </span>
        </button>

        <button
          className={`template-option ${
            wedding.template === "modern"
              ? "selected"
              : ""
          }`}
          onClick={() =>
            selectTemplate("modern")
          }
        >
          <div className="mini-preview modern-card">
            <span>THE WEDDING OF</span>

            <strong>
              AISHA
              <br />
              ×
              <br />
              SAHAL
            </strong>
          </div>

          <span className="template-name">
            Modern
          </span>
        </button>

        <button
          className={`template-option ${
            wedding.template === "floral"
              ? "selected"
              : ""
          }`}
          onClick={() =>
            selectTemplate("floral")
          }
        >
          <div className="mini-preview floral-card">
            <span>WITH LOVE</span>

            <strong>
              Aisha
              <br />
              &
              <br />
              Sahal
            </strong>
          </div>

          <span className="template-name">
            Floral
          </span>
        </button>

      </div>

    </div>
  );
}

export default TemplateSelector;