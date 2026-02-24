'use client'
import Card from "@/common/card"
import useProductSearch from "../hooks/useProductsearch"
import Link from "next/link"
import CategoryStrip from "@/components/categories-strip"
import HeroBanner from "@/components/hero-banner"
import SortDropdown from "@/common/sort-dropdown"

const ProductsBoard = ({ products }) => {

  const { filteredProducts, setSearchTerm, category, setCategory } =
    useProductSearch(products)

  return (
    <div className="min-h-screen">

      <HeroBanner />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Title */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            All Products
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Explore our curated products
          </p>
        </div>

        {/* Category Strip */}
        <CategoryStrip category={category} setCategory={setCategory} />

        {/* Search and Sort */}
        <div className="mb-8 pb-6 border-b border-gray-200">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Search */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search for products..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              />
            {/* <p className="text-sm text-gray-500 mt-4">
              {filteredProducts.length} Products Found
            </p> */}
            </div>
            <SortDropdown />

          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

          {filteredProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                No Products Found
              </h2>
              <p className="text-gray-500 mt-3">
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
                  rating={product.rating}
                  discountPercentage={product.discountPercentage}
                  brand={product.brand}
                  reviews={product.reviews}
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













// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "../hooks/useProductsearch"
// import Link from "next/link"
// import CategorySelect from "@/components/filter-categories"

// const ProductsBoard = ({ products }) => {

//   const { filteredProducts, setSearchTerm, category, setCategory } =
//     useProductSearch(products)

//   return (
//     <div className="bg-gray-50 min-h-screen">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

//         <div className=" p-6 md:p-8 rounded-2xl bg-white border border-white/10">

//           <div className="mb-8 sm:mb-10">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
//               Products
//             </h1>
//           </div>

//         </div>

//         {/* <div className="mb-12 bg-white border border-white/10 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">

//           <div className="relative w-full md:w-96">
//             <input
//               type="text"
//               placeholder="Search products..."
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full bg-[#1c1c22] border border-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/40"
//             />
//           </div>
//           <CategorySelect category={category} setCategory={setCategory} />

//         </div> */}
//         <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm mb-8">

//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

//             {/* Search */}
//             <div className="relative w-full md:w-96">
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition"
//               />
//             </div>

//             {/* Sort Placeholder */}
//             <select
//               className="w-full md:w-auto bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
//             >
//               <option>Sort By</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Top Rated</option>
//             </select>

//           </div>

//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">

//           {filteredProducts.length === 0 ? (
//             <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
//               <h2 className="text-xl font-semibold text-white">
//                 No Products Found
//               </h2>
//               <p className="text-gray-400 mt-3">
//                 Try something else.
//               </p>
//             </div>
//           ) : (
//             filteredProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="block"
//               >
//                 <Card
//                   image={product.thumbnail}
//                   title={product.title}
//                   price={product.price}
//                   description={product.description}
//                 />
//               </Link>
//             ))
//           )}

//         </div>

//       </div>
//     </div>
//   )
// }
// export default ProductsBoard
