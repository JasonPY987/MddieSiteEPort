'use client';

import ScrollCards from './components/ScrollCards';
import ProjectLinks from './components/ProjectLinks';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-y-auto scroll-smooth scrollbar-hide">
      {/* Home Section with Custom Hero Layout */}
      <section
        className="relative h-screen bg-[url('/images/Home-Page-Background.png')] bg-cover bg-center bg-fixed flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Cybersecurity Animated Background */}
        <div className="absolute inset-0">
          {/* Matrix-style moving dots */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(150)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Scanning lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-50" 
                 style={{ animationDuration: '1.5s' }} />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse opacity-50" 
                 style={{ animationDuration: '1.5s', animationDelay: '0.5s' }} />
          </div>
          
          {/* Floating security icons */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 text-cyan-400 opacity-40 animate-bounce" style={{ animationDuration: '3s' }}>
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute top-1/3 right-1/4 text-blue-400 opacity-40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute bottom-1/4 left-1/3 text-green-400 opacity-40 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
              <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute top-1/2 right-1/3 text-purple-400 opacity-40 animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Pulse effect */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-cyan-400 rounded-full opacity-30 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-400 rounded-full opacity-30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-green-400 rounded-full opacity-30 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          </div>

          {/* Data streams */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent animate-pulse"
                style={{
                  left: `${10 + i * 10}%`,
                  height: '100%',
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>

          {/* Corner brackets */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-400" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400" />
          </div>
        </div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        
        {/* Container for hero content */}
        <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 z-10">
          {/* Left side: Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-lg md:text-xl text-white">Hi I&apos;m</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white">Madelyn Greer</h1>
            <p className="mt-3 md:mt-5 text-lg md:text-2xl text-white font-semibold">
              Learning with Intention. Defending with Passion
            </p>
          </div>
          {/* Right side: Photo Border */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/images/Maddie_About_Me_Pic1.png"
              alt="Madelyn Greer"
              className="w-auto h-auto max-w-[200px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="relative bg-[url('/images/About-Me-Background.png')] bg-cover bg-center bg-fixed py-2 md:py-4"
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content container */}
        <div className="relative container mx-auto px-4 md:px-8 flex flex-col items-start text-white">
          {/* Section header */}
          <header className="mb-2">
            <h2 className="text-3xl md:text-4xl font-semibold animate-fadeIn">About Me</h2>
          </header>

          {/* Bio paragraph */}
          <div className="text-base md:text-lg leading-relaxed animate-fadeIn mb-3">
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
            <ul className="list-disc list-inside mt-2 space-y-1">
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
        className="relative bg-[url('/images/Project-Page-Background.png')] bg-cover bg-center bg-fixed py-2 md:py-3"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 md:px-8">
          <h2 className="text-white text-3xl md:text-4xl font-semibold animate-fadeIn mb-2 md:mb-3 text-center">
            Projects
          </h2>
          <ProjectLinks />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-[url('/images/Footer-Background.png')] bg-cover bg-center bg-fixed py-2 md:py-4"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 md:px-8 flex flex-col items-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold animate-fadeIn mb-2 md:mb-3 text-center">
            Contact Me
          </h2>
          <div className="w-full max-w-4xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
