'use client';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My E‑Portfolio</title>
        <meta name="description" content="An impressive e‑portfolio" />
        {/* Import custom font from Adobe Typekit */}
        <link rel="stylesheet" href="https://use.typekit.net/uwp0sqz.css" />
        {/* reCAPTCHA script - uncomment if using reCAPTCHA */}
        {/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
      </head>
      <body className="bg-black text-gray-900">
        {/* Fixed header with navigation */}
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow z-50">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Madelyn Greer</div>
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-blue-500 transition-colors duration-200 text-gray-700"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="hover:text-blue-500 transition-colors duration-200 text-gray-700"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('projects');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-blue-500 transition-colors duration-200 text-gray-700"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* Main content container: pages will render here */}
        <main>{children}</main>
        {/* Footer displayed at the bottom of the page */}
        <footer className="container mx-auto p-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Madelyn Greer. All rights reserved.
        </footer>
      </body>
    </html>
  );
} 