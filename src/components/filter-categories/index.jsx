import { useState } from "react"
export default function CategorySelect({ category, setCategory }) {
  const [open, setOpen] = useState(false)

  const categories = ["All", "Beauty", "Furniture", "Footwear", "Fragrances"]

  return (
    <div className="relative w-52">
      
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#1c1c22] text-white/70 px-4 py-3 rounded-xl border border-white/10"
      >
        {category}

        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute w-[93%] mt-1 bg-[#1c1c22] border border-white/10 rounded-md z-20 ml-1.5">
          {categories.map((item) => (
            <div
              key={item}
              onClick={() => {
                setCategory(item)
                setOpen(false)
              }}
              className="px-4 py-2 text-white hover:bg-white/10 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}