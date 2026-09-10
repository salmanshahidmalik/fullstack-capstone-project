import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">GiftLink</div>
        <button className="nav-button">Get Started</button>
      </nav>

      <section className="hero">
        <div className="badge">SMART COMMUNITY GIFT EXCHANGE</div>

        <h1>
          Give more.
          <br />
          <span>Connect better.</span>
        </h1>

        <p>
          GiftLink makes it simple to discover, share, and connect people
          with useful items in their community.
        </p>

        <button className="hero-button">Get Started →</button>

        <div className="stats">
          <div>
            <strong>16+</strong>
            <span>Available Items</span>
          </div>
          <div>
            <strong>Easy</strong>
            <span>Smart Search</span>
          </div>
          <div>
            <strong>Secure</strong>
            <span>User Accounts</span>
          </div>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);