"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User } from 'lucide-react';

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const router = useRouter()

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    document.cookie ="custom-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    router.replace("/login")
  }

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
      >
        <User />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-40 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden z-50">
          
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>

          <button
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
            onClick={() => {
              setOpen(false)
              handleLogout()
              console.log("Logout clicked")
            }}
          >
            Logout
          </button>

        </div>
      )}

    </div>
  )
}