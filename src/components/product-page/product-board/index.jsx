'use client'
import Card from "@/common/card"
import useProductSearch from "../hooks/useProductsearch"
import Link from "next/link"

const ProductsBoard = ({ products }) => {

  const { filteredProducts, setSearchTerm, category, setCategory } =
    useProductSearch(products)

  return (
    <div className="flex-1 text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

        <div className="mb-12 p-6 md:p-8 rounded-2xl bg-zinc-950 border border-white/10">

          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-400 bg-clip-text tracking-tight">
            Products
          </h1>

          <p className="text-gray-400 mt-3 text-base md:text-lg">
            Browse and explore available products
          </p>

        </div>

        <div className="mb-12 bg-zinc-950 border border-white/10 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1c1c22] border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[#1c1c22] border border-white/10 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/40"
          >
            <option value="All">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="furniture">Furniture</option>
            <option value="footwear">Footwear</option>
            <option value="fragrances">Fragrances</option>
          </select>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">

          {filteredProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <h2 className="text-xl font-semibold text-white">
                No Products Found
              </h2>
              <p className="text-gray-400 mt-3">
                Try something else.
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block"
              >
                <Card
                  image={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
              </Link>
            ))
          )}

        </div>

      </div>
    </div>
  )
}

export default ProductsBoard
