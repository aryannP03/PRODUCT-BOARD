"use client"

import React from "react"
import Image from "next/image"

function Card(props) {

  const { image, title, description, price } = props
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden max-w-65">

      <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
        {image?  
          (<Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-contain p-4"
          />) : <p className="text-gray-800">Unavailable</p>}
      </div>

      <div className="p-4">

        <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {title || "Unknown"}
        </h2>

        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {description || "Description not available"}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            {price? `₹${price}` : <p>N/A</p> }
          </span>
        </div>

      </div>
    </div>
  )
}

export default Card
