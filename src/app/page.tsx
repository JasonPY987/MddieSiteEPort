export default function HomePage() {
  return (
    <div className="h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth scrollbar-hide">
      {/* Home Section with Custom Hero Layout */}
      <section
        className="snap-start relative h-screen bg-[url('/images/Home-Page-Background.png')] bg-cover bg-center bg-fixed flex items-center justify-center"
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Container for hero content */}
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
          {/* Left side: Text content */}
          <div className="md:w-1/2 text-left">
          <h2 className="text-xl text-white">Hi I&apos;m</h2>
            <h1 className="text-5xl font-bold text-white">Madelyn Greer</h1>
            <p className="mt-4 text-2xl text-white">
              Cyber Security Specialist
            </p>
          </div>
          {/* Right side: Photo Border */}
          <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
            <img
              src="/images/Maddie_About_Me_Pic1.png"
              alt="Photo Border"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="snap-start relative h-screen bg-[url('/images/About-Me-Background.png')] bg-cover bg-center bg-fixed flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative text-white text-4xl font-semibold animate-fadeIn">
          About Me
        </h2>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="snap-start relative h-screen bg-[url('/images/Project-Page-Background.png')] bg-cover bg-center bg-fixed flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative text-white text-4xl font-semibold animate-fadeIn">
          Projects
        </h2>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="snap-start relative h-screen bg-[url('/images/Footer-Background.png')] bg-cover bg-center bg-fixed flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="relative text-white text-4xl font-semibold animate-fadeIn">
          Contact Me
        </h2>
      </section>
    </div>
  );
}