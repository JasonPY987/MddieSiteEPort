import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My E-Portfolio</title>
        <meta name="description" content="An impressive e-portfolio" />
      </head>
      <body className="bg-gray-50 text-gray-900">
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
        <main className="pt-20">{children}</main>
        <footer className="container mx-auto p-4 text-center">
          &copy; {new Date().getFullYear()} My E‑Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
