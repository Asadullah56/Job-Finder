import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, Moon, Sun, X } from "lucide-react"

interface NavbarProps {
  theme: "dark" | "light"
  onToggleTheme: () => void
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="border-b border-[#D8E0EA] bg-[#F4F7FB] transition-colors duration-200 ease-out dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-[#0F172A] transition-colors duration-200 ease-out dark:text-white"
          >
            JobFinder
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-[#475569] transition duration-200 ease-out hover:-translate-y-px hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#475569] dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/jobs"
              className="text-[#475569] transition duration-200 ease-out hover:-translate-y-px hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#475569] dark:text-gray-300 dark:hover:text-white"
            >
              Jobs
            </Link>

            <Link
              to="/saved"
              className="text-[#475569] transition duration-200 ease-out hover:-translate-y-px hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#475569] dark:text-gray-300 dark:hover:text-white"
            >
              Saved Jobs
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-lg p-2 text-[#475569] transition duration-200 ease-out hover:scale-105 hover:bg-[#E8EEF5] hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-95 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="rounded-lg p-2 text-[#475569] transition duration-200 ease-out hover:scale-105 hover:bg-[#E8EEF5] hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] active:scale-95 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white md:hidden"
              aria-label={
                isOpen ? "Close navigation" : "Open navigation"
              }
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="border-t border-[#D8E0EA] py-4 dark:border-gray-800 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#475569] transition duration-200 ease-out hover:translate-x-1 hover:bg-[#E8EEF5] hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/jobs"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#475569] transition duration-200 ease-out hover:translate-x-1 hover:bg-[#E8EEF5] hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
              >
                Jobs
              </Link>

              <Link
                to="/saved"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#475569] transition duration-200 ease-out hover:translate-x-1 hover:bg-[#E8EEF5] hover:text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#475569] dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-white"
              >
                Saved Jobs
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
