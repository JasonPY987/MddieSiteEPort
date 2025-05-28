'use client';

import ScrollCards from './components/ScrollCards';
import ProjectLinks from './components/ProjectLinks';

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
            <p className="mt-5 text-2xl text-white font-semibold">
              Learning with Intention. Defending with Passion
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
        className="snap-start relative min-h-screen bg-[url('/images/About-Me-Background.png')] bg-cover bg-center bg-fixed py-20"
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content container */}
        <div className="relative container mx-auto px-8 flex flex-col items-start text-white">
          {/* Section header */}
          <header className="mb-6">
            <h2 className="text-4xl font-semibold animate-fadeIn">About Me</h2>
          </header>

          {/* Bio paragraph */}
          <div className="text-lg leading-relaxed animate-fadeIn mb-16">
            <p>
              I'm based in the Shreveport-Bossier area and hold a Bachelor's in Management & Administration with a minor in Cybersecurity from LSUS. Currently, I'm pursuing a Master's in Cybersecurity and Information Assurance at Western Governors University. My academic background blends management principles with technical cybersecurity skills, which allows me to approach challenges with a comprehensive, strategic mindset.
            </p>
            <br />
            <p>
              Beyond academics, I'm proud to be the co-founder of Lambda Nu Chi, a nontraditional, service-driven sorority at LSUS. We're dedicated to empowering diverse women, particularly those who are passionate about academics, leadership, and community service. Our organization is built around fostering an inclusive, supportive environment where women can excel in their studies, develop leadership skills, and contribute to the community through hands-on service initiatives.
            </p>
            <br />
            <p>
              At Lambda Nu Chi, we aim to break barriers and redefine what it means to be a leader, supporting our members as they thrive academically, socially, and professionally. I'm proud of the space we've created, where we can help young women build the confidence, skills, and experiences necessary to excel in their personal and professional lives. We've been featured in a few articles, highlighting our mission and impact in the local community:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Local Female Leaders Discuss Women's History and Share Inspiration</li>
              <li>LSUS Announces Student Leadership & Professor of the Year Awards</li>
              <li>PublicNow Announcement</li>
            </ul>
            <br />
            <p>
              I'm passionate about the potential of cybersecurity to empower individuals and protect our future. My goal is to build a strong foundation in defensive cybersecurity—protecting systems, supporting professionals, and helping everyday people live and work with peace of mind. With a mindset focused on securing technology, I'm driven to contribute to a safer, more resilient digital world.
            </p>
          </div>

          {/* Scroll Cards Section */}
          <div className="w-full">
            <ScrollCards />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="snap-start relative bg-[url('/images/Project-Page-Background.png')] bg-cover bg-center bg-fixed py-12"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-8">
          <h2 className="text-white text-4xl font-semibold animate-fadeIn mb-8 text-center">
            Projects
          </h2>
          <ProjectLinks />
        </div>
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
