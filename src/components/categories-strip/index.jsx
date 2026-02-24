'use client'

const categories = [
  "All",
  "Beauty",
  "Fragrances",
  "Furniture",
  "Footwear"
]

export default function CategoryStrip({ category, setCategory }) {
  return (
    <div className="sticky top-16 z-40 bg-gray-50 py-4 mb-6 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  category === item
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item}
            </button>
          ))}

        </div>
      </div>

    </div>
  )
}