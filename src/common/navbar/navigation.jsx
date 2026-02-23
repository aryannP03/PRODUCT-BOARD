"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const linkStyle = (path) =>
    `px-4 py-2 rounded-xl transition-all duration-200 ${
      pathname === path
        ? "bg-white/10 text-white font-semibold"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`

  const handleLogout = () => {
    document.cookie =
      "custom-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    
    router.replace("/login")
  }  

  return (
    <>
      <div className="md:hidden sticky top-0 z-50 flex items-center justify-between bg-[#111115] p-4 border-b border-white/10">
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-white"
        >
          <GiHamburgerMenu />
        </button>

        <h1 className="text-lg font-semibold text-white tracking-tight">
          Product Board
        </h1>
      </div>

      <div
        className={`
          fixed top-0 left-0 z-50
          w-64 h-screen
          bg-[#111115]
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          md:block
        `}
      >
        <div className="p-6">

          <div className="md:hidden flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white"
            >
              <MdClose />
            </button>
          </div>

          <div className="mb-10">
            <h1 className="text-xl font-bold text-purple-400 bg-clip-text">
              Product Board
            </h1>
          </div>

          <nav className="flex flex-col gap-3 text-sm">

            <Link href="/dashboard" className={linkStyle("/dashboard")}>
              Dashboard
            </Link>

            <Link href="/products" className={linkStyle("/products")}>
              Products
            </Link>
{/* 
            <Link
              href="/login"
              className="px-4 py-2 rounded-xl text-red-500 hover:bg-red-500/10 transition"
            >
              Logout
            </Link> */}

            <div>
              <button
                onClick={handleLogout}
                className="px-4 text-left w-full py-2 rounded-xl text-red-500 hover:bg-red-500/10 transition">
                Logout
              </button>
            </div>

          </nav>
        </div>
      </div>
    </>
  )
}
