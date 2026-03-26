"use client";

import { useState } from "react";

export default function Page() {
  const services = [
    "Driveways",
    "Patios",
    "Sidewalks",
    "Concrete Repair",
    "Commercial Concrete",
    "Epoxy Floors",
  ];

  const [activeCategory, setActiveCategory] = useState("Stamped Concrete");

  const gallery = {
    "Stamped Concrete": [
      "/Stamped1.jpg",
      "/stamped2.jpg",
      "/stamped3.jpg",
      "/stamped4.jpg",
      "/stamped5.jpg",
      "/stamped6.jpg",
      "/stamped11.jpg",
    ],
    Concrete: [
      "/concrete1.jpg",
      "/concrete2.jpg",
      "/concrete3.jpg",
      "/concrete4.jpg",
      "/concrete5.jpg",
      "/concrete6.jpeg",
      "/concrete7.jpeg",
      "/concrete8.jpg",
      "/concrete9.jpeg",
      "/concrete10.jpeg",
    ],
    "Epoxy Floors": [
      "/epoxy2.jpg",
      "/epoxy3.jpg",
      "/epoxy4.jpg",
      "/epoxy5.jpg",
      "/epoxy6.jpg",
      "/epoxy7.jpg",
      "/epoxy8.jpg",
      "/epoxy9.jpeg",
      "/epoxy10.JPG",
    ],
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        color: "#111",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "70px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ letterSpacing: "1px", marginBottom: "10px", color: "#ccc" }}>
            ROCKY MOUNTAIN CRETE LLC
          </p>

          <h1 style={{ fontSize: "52px", margin: "0 0 18px 0", lineHeight: 1.1 }}>
            Built to Last. Crafted with Precision.
            <br />
            Built for Colorado.
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "720px", lineHeight: 1.6 }}>
            Reliable concrete services for homeowners and businesses across Colorado.
          </p>

          <div style={{ marginTop: "28px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="tel:7192019660"
              style={{
                backgroundColor: "#fff",
                color: "#111",
                padding: "14px 22px",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Call Now
            </a>

            <a
              href="#quote"
              style={{
                backgroundColor: "#f59e0b",
                color: "#111",
                padding: "14px 22px",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>Our Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {services.map((service) => (
              <div
                key={service}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "24px" }}>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", backgroundColor: "#efefef" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Work</h2>
          <p style={{ fontSize: "18px", color: "#555", marginBottom: "24px" }}>
            Browse real project photos by category.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "30px" }}>
            {Object.keys(gallery).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "12px 18px",
                  borderRadius: "999px",
                  border: activeCategory === category ? "2px solid #111" : "1px solid #ccc",
                  backgroundColor: activeCategory === category ? "#111" : "#fff",
                  color: activeCategory === category ? "#fff" : "#111",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {gallery[activeCategory].map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={image}
                  alt={`${activeCategory} project ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" style={{ padding: "0 24px 70px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "32px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ fontSize: "36px", marginTop: 0 }}>Get a Free Quote</h2>

            <form
              action="https://formspree.io/f/xwvrgqzb"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={{ padding: "14px" }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{ padding: "14px" }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                style={{ padding: "14px" }}
              />

              <select name="service" required style={{ padding: "14px" }} defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option>Driveways</option>
                <option>Patios</option>
                <option>Sidewalks</option>
                <option>Concrete Repair</option>
                <option>Commercial Concrete</option>
                <option>Epoxy Floors</option>
              </select>

              <button
                type="submit"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  padding: "14px",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
