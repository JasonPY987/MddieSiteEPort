export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section id="about" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to My E‑Portfolio</h1>
      </section>
      <section id="projects" className="h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-semibold">Projects</h2>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
      </section>
    </div>
  );
}
