"use client"

import React from "react"
import Image from "next/image"

function Card({
  image,
  title,
  price,
  rating = 0,
  discountPercentage = 0,
  brand,
  reviews = []
}) {

  const hasDiscount = discountPercentage > 0

  const originalPrice = hasDiscount
    ? (price / (1 - discountPercentage / 100)).toFixed(2)
    : null

  const reviewCount = reviews.length

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">

      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-52 bg-gray-50 flex items-center justify-center border-b border-gray-100">

        {/* Discount Badge */}
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-md">
            {Math.round(discountPercentage)}% OFF
          </span>
        )}

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

      {/* Content */}
      <div className="p-4">

        {/* Brand */}
        {brand && (
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            {brand}
          </p>
        )}

        {/* Title */}
        <h2 className="text-sm sm:text-base font-semibold text-gray-900 mt-1 truncate ">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-500 text-sm">
            {"★".repeat(Math.round(rating))}
            {"☆".repeat(5 - Math.round(rating))}
          </div>
          <span className="text-xs text-gray-500">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">
            ₹{price}
          </span>

          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

      </div>
    </div>
  )
}

export default Card













// "use client"

// import React from "react"
// import Image from "next/image"

// function Card({ image, title, description, price }) {
//   return (
//     // <div className="w-full bg-white border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]">
//     <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//       <div className="relative w-full h-48 flex items-center justify-center">
//         {image ? (
//           <Image
//             src={image}
//             alt={title}
//             fill
//             unoptimized
//             className="object-contain p-4"
//           />
//         ) : (
//           <p className="text-gray-400">Unavailable</p>
//         )}
//       </div>

//       <div className="p-5">

//         <h2 className="text-lg font-semibold text-gray-900 mb-1 truncate">
//           {title || "Unknown"}
//         </h2>

//         <p className="text-sm text-gray-500 mb-4 line-clamp-2">
//           {description || "Description not available"}
//         </p>

//         <div className="flex justify-between items-center">
//           <span className="text-lg font-bold text-purple-400">
//             {price ? `₹${price}` : "N/A"}
//           </span>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Card
