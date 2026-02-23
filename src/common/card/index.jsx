"use client"

import React from "react"
import Image from "next/image"

function Card({ image, title, description, price }) {
  return (
    <div className="w-full bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]">

      <div className="relative w-full h-48 bg-zinc-900 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-contain p-4"
          />
        ) : (
          <p className="text-gray-400">Unavailable</p>
        )}
      </div>

      <div className="p-5">

        <h2 className="text-lg font-semibold text-white mb-1 truncate">
          {title || "Unknown"}
        </h2>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {description || "Description not available"}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-purple-400">
            {price ? `₹${price}` : "N/A"}
          </span>
        </div>

      </div>
    </div>
  )
}

export default Card
