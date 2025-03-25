export default function HomePage() {
  return (
    <div>
      {/* Home Section */}
      <section
        className="h-screen bg-[url('/images/Home-Page-Background.png')] bg-cover bg-center flex items-center justify-center"
      >
        <h1 className="text-white text-5xl font-bold">Welcome to My E‑Portfolio</h1>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="h-screen bg-[url('/images/About-Me-Background.png')] bg-cover bg-center flex items-center justify-center"
      >
        <h2 className="text-white text-4xl font-semibold">About Me</h2>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen bg-[url('/images/Project-Page-Background.png')] bg-cover bg-center flex items-center justify-center"
      >
        <h2 className="text-white text-4xl font-semibold">Projects</h2>
      </section>

      {/* Footer Section */}
      <section
        id="contact"
        className="h-screen bg-[url('/images/Footer-Background.png')] bg-cover bg-center flex items-center justify-center"
      >
        <h2 className="text-white text-4xl font-semibold">Contact Me</h2>
      </section>
    </div>
  );
}