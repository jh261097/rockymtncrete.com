export default function RockyMountainCreteWebsite() {
  const services = [
    { title: 'Driveways & Patios', desc: 'New installs, replacements, and extensions built for durability in Colorado climates.' },
    { title: 'Sidewalks & Repairs', desc: 'Safe, clean, and code-compliant repairs and replacements.' },
    { title: 'Commercial Concrete', desc: 'Flatwork, curbs, and site concrete for property managers and builders.' },
    { title: 'Epoxy Floors', desc: 'Garage and interior coatings with long-lasting professional finishes.' }
  ];

  const cities = [
    'Colorado Springs','Cripple Creek','Woodland Park','Castle Rock','Denver','Boulder','Englewood','Greenwood Village','Littleton','Broomfield','Centennial','Aurora','Westminster','Longmont','Golden','Lakewood','Lafayette','Arvada','Wheat Ridge','Evergreen','Parker','Erie','Brighton','Highlands Ranch','Monument','Conifer','Black Hawk','Larkspur','Morrison','Franktown','Idaho Springs','Commerce City','Fort Lupton','Sedalia','Frederick','Fort Collins','Falcon'
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-bold">Rocky Mountain Crete LLC</p>
            <p className="text-sm text-slate-500">Concrete Done Right</p>
          </div>
          <a href="tel:7192019660" className="rounded-xl bg-slate-900 px-4 py-2 text-white text-sm">Call Now</a>
        </div>
      </header>

      <main>
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-4xl font-bold">Concrete Done Right Without Breaking the Bank</h1>
              <p className="mt-4 text-slate-600">
                We provide reliable concrete services for homeowners and businesses across Colorado.
                From driveways to commercial flatwork, we focus on quality, durability, and clean finishes.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="tel:7192019660" className="bg-slate-900 text-white px-6 py-3 rounded-xl">Call 719-201-9660</a>
                <a href="#contact" className="border px-6 py-3 rounded-xl">Get Free Estimate</a>
              </div>
              <div className="mt-6 text-sm text-slate-500">
                Serving Colorado Springs • Denver Metro • Surrounding Areas
              </div>
            </div>
            <div className="bg-white border rounded-2xl flex items-center justify-center min-h-[320px]">
              <p className="text-slate-400">Add your project photo here</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {services.map((s) => (
              <div key={s.title} className="border rounded-2xl p-6">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border rounded-2xl p-6">Free Estimates</div>
              <div className="border rounded-2xl p-6">Military & First Responder Discounts</div>
              <div className="border rounded-2xl p-6">Quality Prep & Reinforcement</div>
              <div className="border rounded-2xl p-6">Professional & Reliable Crew</div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold">Service Areas</h2>
          <p className="text-slate-600 mt-4">We proudly serve cities across Colorado including:</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6 text-sm text-slate-700">
            {cities.map((city) => (
              <div key={city}>• {city}</div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-slate-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold">Get a Free Estimate</h2>
              <p className="mt-4 text-slate-300">Call, text, or email us and we’ll get back to you quickly.</p>
              <p className="mt-6">719-201-9660</p>
              <p>rockymountaincretellc@gmail.com</p>
              <p className="mt-4 text-sm text-slate-400">www.rockymtncrete.com</p>
            </div>
            <div className="bg-white text-slate-900 p-6 rounded-2xl">
              <input placeholder="Name" className="w-full border rounded-xl p-3 mb-3" />
              <input placeholder="Phone or Email" className="w-full border rounded-xl p-3 mb-3" />
              <textarea placeholder="Project details" className="w-full border rounded-xl p-3 mb-3 min-h-[120px]" />
              <button className="bg-slate-900 text-white w-full py-3 rounded-xl">Submit</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
