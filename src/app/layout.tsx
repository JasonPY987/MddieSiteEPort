import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My E‑Portfolio</title>
        <meta name="description" content="An impressive e‑portfolio" />
        {/* Import custom font from Adobe Typekit */}
        <link rel="stylesheet" href="https://use.typekit.net/uwp0sqz.css" />
      </head>
      <body className="bg-gray-50 text-gray-900 overflow-hidden">
        {/* Fixed header with navigation */}
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <div className="text-xl font-bold">MyLogo</div>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* Main content container: pages will render here */}
        <main className="pt-20">{children}</main>
        {/* Footer displayed at the bottom of the page */}
        <footer className="container mx-auto p-4 text-center">
          &copy; {new Date().getFullYear()} My E‑Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}