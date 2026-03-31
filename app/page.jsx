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
            View Our Work
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>Our Work</h2>
          <p style={{ marginBottom: "30px", color: "#555" }}>
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
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", background: "#111", color: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ marginBottom: "30px", color: "#ccc" }}>
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
        </div>
      </section>
    </main>
  );
}
