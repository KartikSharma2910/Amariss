import React, { Fragment, useState } from "react";
import "./app.css";

const FormComponent = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window?.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "User Information",
        event_label: email,
      });
    }
    setEmail("");
  };

  return (
    <Fragment>
      <div className="mobile-container">
        <header>
          <section className="hero-banner">
            <div className="logo-wrapper">AMÁRISS</div>
            <div className="hero-image"></div>
          </section>
        </header>
        <main>
          <article className="text-info">
            <h2>We're</h2>
            <h2>
              Coming
              <br />
              Soon
            </h2>
            <p>
              Amariss isn’t just a perfume — it’s your signature in the air.
              Crafted with rare ingredients and timeless passion, Amariss
              captures what words cannot. Sensual, Bold and Unforgettable. Just
              like you. Be among the first to experience India’s newest luxury
              fragrance.
            </p>
            <br />
            <p>
              Register now to receive an exclusive first look — and early access
              to our limited launch.
            </p>
            <section className="email-signup">
              <form onSubmit={handleSubmit}>
                <input
                  className="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  name="email-address"
                />
                <input
                  value="Go"
                  type="submit"
                  for="email-address"
                  className="email-submit"
                ></input>
              </form>
            </section>
          </article>
        </main>
      </div>
      <div className="hero-image-desktop">
        <img src="/amarisss.png" alt="Our Brand" />
      </div>
    </Fragment>
  );
};

export default FormComponent;
