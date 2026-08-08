import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <nav className="navbar">
        <div className="logo">
          WedInvite
        </div>

        <Link
          to="/create"
          className="nav-button"
        >
          Create Invitation
        </Link>
      </nav>

      <main className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            YOUR SPECIAL DAY
          </p>

          <h1>
            Your wedding deserves
            <span> a beautiful invitation.</span>
          </h1>

          <p className="hero-description">
            Create a beautiful wedding invitation
            website in just a few minutes.
          </p>

          <Link
            to="/create"
            className="primary-button"
          >
            Create My Invitation
          </Link>

        </div>

      </main>

      <section className="template-section">

        <div className="section-heading">
          <p className="eyebrow">
            DESIGNS
          </p>

          <h2>
            Choose your style
          </h2>

          <p>
            Start with a beautiful template
            and customize it with your details.
          </p>
        </div>

        <div className="home-templates">

          <div className="home-template-card classic-card">
            <div className="template-card-content">
              <small>WEDDING</small>

              <strong>
                Sahal
                <br />
                &
                <br />
                Aisha
              </strong>
            </div>
          </div>

          <div className="home-template-card modern-card">
            <div className="template-card-content">
              <small>THE WEDDING OF</small>

              <strong>
                SAHAL
                <br />
                ×
                <br />
                AISHA
              </strong>
            </div>
          </div>

          <div className="home-template-card floral-card">
            <div className="template-card-content">
              <small>TOGETHER WITH LOVE</small>

              <strong>
                Sahal
                <br />
                &
                <br />
                Aisha
              </strong>
            </div>
          </div>

        </div>

      </section>

      <footer>
        Made with love ♥
      </footer>

    </div>
  );
}

export default Home;