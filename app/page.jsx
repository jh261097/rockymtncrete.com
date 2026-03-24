export default function Page() {
  const services = [
    "Driveways & Patios",
    "Sidewalks & Repairs",
    "Commercial Concrete",
    "Epoxy Floors",
  ];

  const areas = [
    "Colorado Springs",
    "Denver",
    "Castle Rock",
    "Aurora",
    "Centennial",
    "Littleton",
    "Lakewood",
    "Parker",
    "Highlands Ranch",
    "Woodland Park",
  ];

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
          </h1>
          <p style={{ fontSize: "20px", maxWidth: "720px", lineHeight: 1.6 }}>
            Reliable concrete services for homeowners and businesses across Colorado.
            We focus on quality work, clean finishes, and straightforward communication.
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
              Call 719-201-9660
            </a>
            <a
              href="mailto:rockymountaincretellc@gmail.com"
              style={{
                border: "1px solid #fff",
                color: "#fff",
                padding: "14px 22px",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Email Us
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

      <section style={{ padding: "0 24px 60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "32px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ fontSize: "36px", marginTop: 0 }}>Contact</h2>
            <p style={{ fontSize: "20px", lineHeight: 1.8 }}>
              <strong>Phone:</strong> 719-201-9660
              <br />
              <strong>Email:</strong> rockymountaincretellc@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 70px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Service Areas</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {areas.map((area) => (
              <span
                key={area}
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
    <section style={{ padding: "50px 20px", backgroundColor: "#fff" }}>
  <div style={{ maxWidth: "600px", margin: "0 auto" }}>
    <h2>Get a Free Quote</h2>

    <form
      action="https://formspree.io/f/xxxxabcd"
      method="POST"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Your Phone" required />

      <select name="service" required>
        <option value="">Select Service</option>
        <option>Driveway</option>
        <option>Patio</option>
        <option>Sidewalk</option>
        <option>Commercial</option>
        <option>Epoxy</option>
      </select>

      <button
        type="submit"
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit Request
      </button>
    </form>
  </div>
<section style={{ padding: "50px 20px", backgroundColor: "#fff" }}>
  <div style={{ maxWidth: "600px", margin: "0 auto" }}>
    <h2>Get a Free Quote</h2>

    <form
      action="https://formspree.io/f/xxxxabcd"
      method="POST"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Your Phone" required />

      <select name="service" required>
        <option value="">Select Service</option>
        <option>Driveway</option>
        <option>Patio</option>
        <option>Sidewalk</option>
        <option>Commercial</option>
        <option>Epoxy</option>
      </select>

      <button
        type="submit"
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Submit Request
      </button>
    </form>
  </div>
</section>
  );
}
