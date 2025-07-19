import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import "./app.css";

const FormComponent = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToastId = toast.loading("Registering user...");

    try {
      const res = await fetch(
        "https://amariss-backend.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: email }),
        }
      );

      const data = await res.json();

      if (res.status === 201) {
        toast.update(loadingToastId, {
          render: "Registered Successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(loadingToastId, {
          render: data.message || "Registration failed",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.update(loadingToastId, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 3000,
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
                  type="number"
                  required
                  value={email}
                  name="phone"
                  maxLength={10}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                <input value="Go" type="submit" className="email-submit" />
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
