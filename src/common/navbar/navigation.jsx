"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-white p-4 shadow-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl"
        >
          ☰
        </button>

        <Image
          src="/mainlogo.jpg"
          width={40}
          height={40}
          alt="logo"
        />
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
              ✕
            </button>
          </div>

          <div className="mb-10 hidden md:block">
            <h1 className="text-2xl text-blue-500 font-extrabold font-serif">Product Board</h1>
          </div>

          <nav className="flex flex-col gap-3 text-gray-600">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100">
              Home
            </Link>
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







// import Link from "next/link"
// import Image from "next/image"

// export default function Navigation() {
//   return (
//     <div className="flex flex-row md:flex-col items-center md:items-start 
//       justify-between md:justify-start 
//       w-full md:w-64 
//       bg-white border-r shadow-sm
//       md:px-4 py-4 md:py-8">

//         <div className="flex items-center justify-center md:mb-10">
//           {/* <Image
//             src="/mainlogo.jpg"
//             width={55}
//             height={55}
//             alt="logo"
//             className="rounded-lg"
//           /> */}
//           <h1 className="text-2xl text-gray-900 font-extrabold">Product Board</h1>
//         </div>
//         <nav className="w-full">
//           <ul className="flex flex-row md:flex-col items-center md:items-start justify-end md:justify-start text-gray-600 text-base w-full">

//             <li className="w-full">
//               <Link href="/"
//                 className="block w-full px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition">
//                 Home
//               </Link>
//             </li>

//             <li className="w-full">
//               <Link href="/dashboard"
//                 className="block w-full px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition">
//                 Dashboard
//               </Link>
//             </li>

//             <li className="w-full">
//               <Link href="/products"
//                 className="block w-full px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition">
//                 Products
//               </Link>
//             </li>

//             <li className="w-full">
//               <Link href="/login"
//                 className="block w-full px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition">
//                 Logout
//               </Link>
//             </li>

//           </ul>
//       </nav>


//     </div>
//   )
// }


