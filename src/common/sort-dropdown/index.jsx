'use client'
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SortDropdown() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("Newest")

  const options = [
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
  ]

  return (
    <div className="relative w-52">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-200  rounded-full px-4 py-2 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-200"
      >
        <span className="text-gray-700 font-medium">
          {selected}
        </span>

        <ChevronDown
          size={18}
          className={`text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option)
                setOpen(false)
              }}
              className="px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 cursor-pointer transition"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}