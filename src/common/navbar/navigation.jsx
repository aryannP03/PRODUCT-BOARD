import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  return (
    <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start w-full md:w-64 bg-white shadow-md
      px-4 py-3 md:py-6">
      
      <div className="flex items-center justify-center md:mb-8">
        <Image
          src="/mainlogo.jpg"
          width={55}
          height={55}
          alt="logo"
        />
      </div>

      <nav className="w-full">
        <ul className="flex flex-row md:flex-col items-center md:items-start justify-end md:justify-start gap-6 md:gap-4 text-gray-700 text-base">
          <li><Link href="/" className="hover:text-red-700">Home</Link></li>
          <li><Link href="/dashboard"className="hover:text-red-700">Dashboard</Link></li>
          <li><Link href="/products" className="hover:text-red-700">Products</Link></li>
          <li><Link href="/login" className="hover:text-red-700">Logout</Link></li>
        </ul>
      </nav>
    </div>
  )
}







// import Link from "next/link";
// import Image from "next/image";

// export default function Navigation() {
//     return (
//         <div className="grid w-70 grid-row-2 text-3xl text-center bg-white md:min-h-[100vh] items-start">
//             <Image
//             src="/mainlogo.jpg"
//             width={65}
//             height={65}
//             alt="logo"
//             ></Image> 
//             <nav>
//                 <ul  className="flex md:flex-col gap-3 h-[80%] text-gray-700 text-lg mt-3.5 md:justify-end mr-4">
//                     <li><Link href="/"> Home</Link></li>
//                     <li><Link href="/dashboard">Dashboard</Link></li>
//                     <li><Link href="/login">Login</Link></li>
//                     <li><Link href="/products">Products</Link></li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }