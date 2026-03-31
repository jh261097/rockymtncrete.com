"use client";

export default function Page() {
  const gallery = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
    "/img14.jpg",
    "/img15.jpg",
    "/img16.jpg",
    "/img17.jpg",
    "/img18.jpg",
    "/img19.jpg",
    "/img20.jpg",
    "/img21.jpg",
    "/img22.jpg",
    "/img23.jpg",
    "/img24.jpg",
    "/img25.jpg",
    "/img26.jpg",
    "/img27.jpg",
    "/img28.jpg",
    "/img29.jpg",
    "/img30.jpg",
    "/img31.jpg",
    "/img32.jpg",
    "/img33.jpg",
    "/img34.jpg",
    "/img35.jpg",
    "/img36.jpg",
    "/img37.jpg",
    "/img38.jpg",
    "/img39.jpg",
    "/img40.jpg",
    "/img41.jpg",
    "/img42.jpg",
    "/img43.jpg",
    "/img44.jpg",
    "/img45.jpg",
    "/img46.jpg",
    "/img47.jpg",
    "/img48.jpg",
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        color: "#111",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              letterSpacing: "1px",
              marginBottom: "10px",
              color: "#ccc",
            }}
          >
            ROCKY MOUNTAIN CRETE LLC
          </p>

          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Built to Last. Crafted with Precision.
            <br />
            Built for Colorado.
          </h1>

          <p
            style={{
              fontSize: "20px",
              marginBottom: "30px",
              color: "#ccc",
              maxWidth: "700px",
              lineHeight: 1.6,
            }}
          >
            Concrete work done right the first time for homeowners and businesses across Colorado.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:7192019660"
              style={{
                background: "#fff",
                color: "#111",
                padding: "14px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Call Now
            </a>

            <a
              href="#gallery"
              style={{
                background: "#fff",
                color: "#111",
                padding: "14px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              View Gallery
            </a>

            <a
              href="#quote"
              style={{
                background: "#f59e0b",
                color: "#111",
                padding: "14px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "24px" }}>Our Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              "Driveways",
              "Patios",
              "Sidewalks",
              "Concrete Repair",
              "Commercial Concrete",
              "Epoxy Floors",
            ].map((service) => (
              <div
                key={service}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "24px" }}>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Work</h2>
          <p style={{ marginBottom: "30px", color: "#555", fontSize: "18px" }}>
            Real projects. Real results.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {gallery.map((img, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    display: "block",
                    backgroundColor: "#ddd",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Get a Free Quote</h2>

          <form
            action="https://formspree.io/f/xwvrgqzb"
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <select
              name="service"
              required
              defaultValue=""
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <option value="" disabled>
                Select Service
              </option>
              <option>Driveway</option>
              <option>Patio</option>
              <option>Sidewalk</option>
              <option>Concrete Repair</option>
              <option>Commercial Concrete</option>
              <option>Epoxy Floor</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="5"
              style={{
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

            <button
              type="submit"
              style={{
                background: "#111",
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
      </section>

      <section
        style={{
          padding: "60px 20px",
          background: "#111",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Ready to Start Your Project?
        </h2>

        <p style={{ color: "#ccc", marginBottom: "30px" }}>
          Call or text for a fast, free estimate.
        </p>

        <a
          href="tel:7192019660"
          style={{
            background: "#fff",
            color: "#111",
            padding: "14px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Call Now
        </a>
      </section>
    </main>
  );
}
