"use client"

import React from "react"
import Image from "next/image"

function Card(props) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl 
      shadow-sm hover:shadow-lg hover:-translate-y-1 
      transition-all duration-300 overflow-hidden max-w-65">

      <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
        <Image
          src={props.image}
          alt={props.title}
          fill
          unoptimized
          className="object-contain p-4"
        />
      </div>

      <div className="p-4">

        <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {props.title}
        </h2>

        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {props.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ₹{props.price}
          </span>
        </div>

      </div>
    </div>
  )
}

export default Card




// "use client"

// import React from 'react'
// import Image from 'next/image'

// function Card( props) {
    
//     return (
//         <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition bg-gray-400">
//             <div className="relative w-full h-48 mb-4 overflow-hidden ">
//                 <Image
//                     src={props.image}
//                     alt={props.title}
//                     fill
//                     unoptimized
//                     className="object-contain bg-white rounded-md"
//                 />
//             </div>

//             <h2 className="text-lg font-semibold mb-2">{props.title}</h2>

//             <p className="text-gray-600 text-sm mb-3">
//                 {props.description}
//             </p>

//             <div className="flex justify-between items-center">
//                 <span className="text-xl font-bold">₹{props.price}</span>
//             </div>
//         </div>
//     )
// }

// export default Card
