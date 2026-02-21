"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const linkStyle = (path) =>
    `px-4 py-2 rounded-xl transition-all duration-200 ${
      pathname === path
        ? "bg-white/10 text-white font-semibold"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`

  return (
    <>
      {/* Sticky Mobile Header */}
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

      {/* Sidebar */}
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

          {/* Close button mobile */}
          <div className="md:hidden flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white"
            >
              <MdClose />
            </button>
          </div>

          {/* Title */}
          <div className="mb-10">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Product Board
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3 text-sm">

            <Link href="/dashboard" className={linkStyle("/dashboard")}>
              Dashboard
            </Link>

            <Link href="/products" className={linkStyle("/products")}>
              Products
            </Link>

            <Link
              href="/login"
              className="px-4 py-2 rounded-xl text-red-500 hover:bg-red-500/10 transition"
            >
              Logout
            </Link>

          </nav>
        </div>
      </div>
    </>
  )
}





// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { GiHamburgerMenu } from "react-icons/gi"
// import { MdClose } from "react-icons/md"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   const linkStyle = (path) =>
//     `px-4 py-2 rounded-xl transition-all duration-200 ${ pathname === path
//         ? "bg-white/60 text-gray-900 shadow-sm font-medium"
//         : "text-gray-700 hover:bg-white/80 hover:text-gray-900"
//     }`

//   return (
//     <>
//       <div className="md:hidden flex items-center justify-between bg-white/80 backdrop-blur-md p-4 shadow-sm">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="text-2xl text-gray-800"
//         >
//           <GiHamburgerMenu />
//         </button>

//         <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
//           Product Board
//         </h1>
//       </div>

//       <div
//         className={`
//           fixed md:static top-0 left-0 z-50 h-screen w-64
//           bg-white/70 backdrop-blur-md
//           border-r border-white/40 shadow-lg
//           transform transition-transform duration-300
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//         `}
//       >
//         <div className="p-6">

//           {/* Close button for mobile */}
//           <div className="md:hidden sticky top-0 z-50 flex items-center justify-between bg-[#111115]/90 backdrop-blur-md p-4 border-b border-white/10">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-2xl text-gray-800"
//             >
//               <MdClose />
//             </button>
//           </div>

//           {/* Title */}
//           <div className="mb-10">
//             <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
//               Product Board
//             </h1>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex flex-col gap-3 text-sm">

//             <Link href="/dashboard" className={linkStyle("/dashboard")}>
//               Dashboard
//             </Link>

//             <Link href="/products" className={linkStyle("/products")}>
//               Products
//             </Link>

//             <Link
//               href="/login"
//               className="px-4 py-2 rounded-xl text-red-600 hover:bg-red-50 transition"
//             >
//               Logout
//             </Link>

//           </nav>
//         </div>
//       </div>
//     </>
//   )
// }





// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdClose } from "react-icons/md";

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <>
//       <div className="md:hidden flex items-center justify-between bg-white p-4 shadow-sm">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="text-2xl text-black"
//         >
//           < GiHamburgerMenu/>
//         </button>

//         <h1 className="text-xl text-blue-500 font-extrabold font-serif">Product Board</h1>
//       </div>

//       <div
//         className={`
//           fixed md:static top-0 left-0 z-50 h-screen w-64 bg-blue-200 opacity-97 border-r shadow-sm ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0`}>
//         <div className="p-6">

//           <div className="md:hidden flex justify-end mb-6">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-2xl font-bold"
//             >
//               <MdClose className="text-black"/>
//             </button>
//           </div>

//           <div className="mb-10">
//             <h1 className="text-2xl text-blue-500 font-extrabold font-serif">Product Board</h1>
//           </div>

//           <nav className="flex flex-col gap-3 text-gray-600">
//             {/* <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-100">
//               Home
//             </Link> */}
//             <Link href="/dashboard" className="px-3 py-2 rounded-lg hover:bg-gray-100">
//               Dashboard
//             </Link>
//             <Link href="/products" className="px-3 py-2 rounded-lg hover:bg-gray-100">
//               Products
//             </Link>
//             <Link href="/login" className="px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-600">
//               Logout
//             </Link>
//           </nav>

//         </div>
//       </div>
//     </>
//   )
// }