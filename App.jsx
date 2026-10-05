import React from "react";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="landing-page">
        <div className="landing-overlay">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your destination for beautiful
            houseplants and greenery. Discover plants that bring freshness,
            beauty, and nature into your home.
          </p>

          <button className="get-started">
            Get Started
          </button>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

export default App;