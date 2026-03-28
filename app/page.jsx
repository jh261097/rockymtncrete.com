"use client";

export default function Page() {
  const services = [
    "Driveways",
    "Patios",
    "Sidewalks",
    "Concrete Repair",
    "Commercial Concrete",
    "Epoxy Floors",
  ];

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
        backgroundColor: "#f7f7f7",
        color: "#111",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
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

          <h1 style={{ fontSize: "52px", margin: "0 0 18px 0" }}>
            Built to Last. Crafted with Precision.
          </h1>

          <a
            href="#gallery"
            style={{
              backgroundColor: "#fff",
              color: "#111",
              padding: "12px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Gallery
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Gallery
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`img-${i}`}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
