"use client"

import { useState } from "react"
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-white p-4 shadow-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-black"
        >
          < GiHamburgerMenu/>
        </button>

        <h1 className="text-xl text-blue-500 font-extrabold font-serif">Product Board</h1>
      </div>

      <div
        className={`
          fixed md:static top-0 left-0 z-50 h-screen w-64 bg-blue-200 opacity-97 border-r shadow-sm ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}>
        <div className="p-6">

          <div className="md:hidden flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold"
            >
              <MdClose className="text-black"/>
            </button>
          </div>

          <div className="mb-10">
            <h1 className="text-2xl text-blue-500 font-extrabold font-serif">Product Board</h1>
          </div>

          <nav className="flex flex-col gap-3 text-gray-600">
            {/* <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100">
              Home
            </Link> */}
            <Link href="/dashboard" className="px-3 py-2 rounded-lg hover:bg-gray-100">
              Dashboard
            </Link>
            <Link href="/products" className="px-3 py-2 rounded-lg hover:bg-gray-100">
              Products
            </Link>
            <Link href="/login" className="px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600">
              Logout
            </Link>
          </nav>

        </div>
      </div>
    </>
  )
}