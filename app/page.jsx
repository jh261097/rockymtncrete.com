"use client";

export default function Page() {
  const gallery = [
    "/img1.jpg","/img2.jpg","/img3.jpg","/img4.jpg","/img5.jpg","/img6.jpg",
    "/img7.jpg","/img8.jpg","/img9.jpg","/img10.jpg","/img11.jpg","/img12.jpg",
    "/img13.jpg","/img14.jpg","/img15.jpg","/img16.jpg","/img17.jpg","/img18.jpg",
    "/img19.jpg","/img20.jpg","/img21.jpg","/img22.jpg","/img23.jpg","/img24.jpg",
    "/img25.jpg","/img26.jpg","/img27.jpg","/img28.jpg","/img29.jpg","/img30.jpg",
    "/img31.jpg","/img32.jpg","/img33.jpg","/img34.jpg","/img35.jpg","/img36.jpg",
    "/img37.jpg","/img38.jpg","/img39.jpg","/img40.jpg","/img41.jpg","/img42.jpg",
    "/img43.jpg","/img44.jpg","/img45.jpg","/img46.jpg","/img47.jpg","/img48.jpg",
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>

      {/* HERO */}
      <section style={{ background: "#111", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Rocky Mountain Crete
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "30px", color: "#ccc" }}>
            Concrete work done right the first time. Built to last.
          </p>

          <a href="#gallery" style={btnWhite}>View Our Work</a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Work</h2>
          <p style={{ marginBottom: "30px", color: "#555" }}>
            Real projects. Real results.
          </p>

          <div style={grid}>
            {gallery.map((img, i) => (
              <div key={i} style={card}>
                <img src={img} alt={`Project ${i + 1}`} style={imgStyle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Get a Free Quote
          </h2>

          <form
            action="https://formspree.io/f/xwvrgqzb"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input name="name" placeholder="Name" required style={input} />
            <input name="email" type="email" placeholder="Email" required style={input} />
            <input name="phone" placeholder="Phone" required style={input} />

            <select name="service" required style={input}>
              <option value="">Select Service</option>
              <option>Driveway</option>
              <option>Patio</option>
              <option>Sidewalk</option>
              <option>Epoxy Floor</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="4"
              style={input}
            />

            <button type="submit" style={btnBlack}>
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ padding: "60px 20px", background: "#111", color: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Ready to Start?
        </h2>

        <a href="tel:7192019660" style={btnWhite}>
          Call Now
        </a>
      </section>
    </main>
  );
}

/* STYLES */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const card = {
  background: "#fff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const imgStyle = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
};

const input = {
  padding: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnWhite = {
  background: "#fff",
  color: "#111",
  padding: "14px 22px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
};

const btnBlack = {
  background: "#111",
  color: "#fff",
  padding: "14px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: "8px",
};
