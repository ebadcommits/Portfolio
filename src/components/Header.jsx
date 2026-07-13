import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="p-4">
      <nav className="flex justify-between items-start">
        <div className="navigation">
          <h1 className="text-4xl font-black leading-tight">
            Ebad<br />Sheikh
          </h1>
        </div>

        <button
          className="absolute top-4 right-4 bg-none border-none cursor-pointer outline-none md:hidden"
          onClick={toggleMenu}
        >
          <img src="menu-icon.png" alt="open" width="28" />
        </button>

        <ul
          className={`fixed top-4 right-0 h-32 w-2/8 bg-white bg-opacity-80 flex flex-col items-left justify-center gap-3 p-2.5 m-0 rounded-tl-xl rounded-bl-xl z-50 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:gap-4 md:rounded-none`}
        >
          <button
            className="absolute top-3 right-4 bg-none border-none cursor-pointer outline-none md:hidden"
            onClick={closeMenu}
          >
            <img src="close-menu.png" alt="close" width="22" />
          </button>
          <li>
            <a
              href="https://github.com/ebadcommits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="github.png" alt="github" width="28" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+9203330218991" target="_blank" rel="noopener noreferrer">
              <img src="whatsapp.png" alt="whatsapp" width="28" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ebad-sheikh-35095a251/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedin.png" alt="linkedin" width="28" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
