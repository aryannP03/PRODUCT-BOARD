'use client'
import Card from "@/common/card"
import useProductSearch from "../hooks/useProductsearch"
import Link from "next/link"

const ProductsBoard = ({ products }) => {

  const { filteredProducts, setSearchTerm, category, setCategory } =
    useProductSearch(products)

  return (
    <div className="flex-1 bg-[#0f0f12] text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

        {/* Highlighted Header */}
        <div className="mb-12 p-6 md:p-8 rounded-2xl bg-[#16161c] border border-white/10">

          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-400 bg-clip-text tracking-tight">
            Products
          </h1>

          <p className="text-gray-400 mt-3 text-base md:text-lg">
            Browse and explore available products
          </p>

        </div>

        {/* Search & Filter */}
        <div className="mb-12 bg-[#16161c] border border-white/10 rounded-2xl p-5 md:p-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#1c1c22] border border-white/10 text-white px-4 py-3 pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/40"
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">

          {filteredProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <div className="text-6xl mb-6">📦</div>
              <h2 className="text-xl font-semibold text-white">
                No Products Found
              </h2>
              <p className="text-gray-400 mt-3">
                Try adjusting your search or filters.
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







// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "../hooks/useProductsearch"
// import Link from "next/link"

// const ProductsBoard = ({ products }) => {

//   const { filteredProducts, setSearchTerm, category, setCategory } =
//     useProductSearch(products)

//   return (
//     <div className="flex-1">

//       <div className="max-w-7xl mx-auto px-10 py-16">

//         {/* <div className="mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
//             Products
//           </h1>
//           <p className="text-gray-700 mt-3 text-lg">
//             Browse and explore available products
//           </p>
//         </div> */}
//         <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">

//             <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//               Products
//             </h1>

//             <p className="text-gray-400 mt-3 text-lg">
//               Browse and explore available products
//             </p>

//         </div>

//         <div className="mb-14 bg-white/80 border border-white/50 shadow-xl rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-300">

//           <div className="relative w-full md:w-96 group">
//             <input
//               type="text"
//               placeholder="Search products..."
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//             />
//             <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-indigo-500 transition">
//               🔍
//             </span>
//           </div>

//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//           >
//             <option value="All">All Categories</option>
//             <option value="beauty">Beauty</option>
//             <option value="furniture">Furniture</option>
//             <option value="footwear">Footwear</option>
//             <option value="fragrances">Fragrances</option>
//           </select>

//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">

//           {filteredProducts.length === 0 ? (
//             <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
//               <div className="text-7xl mb-6">📦</div>
//               <h2 className="text-2xl font-semibold text-gray-900">
//                 No Products Found
//               </h2>
//               <p className="text-gray-700 mt-3 text-lg">
//                 Try adjusting your search or filters.
//               </p>
//             </div>
//           ) : (
//             filteredProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="block group"
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




// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "../hooks/useProductsearch"
// import Link from "next/link"

// const ProductsBoard = ({ products }) => {

//   const { filteredProducts, setSearchTerm, category, setCategory } =
//     useProductSearch(products)

//   return (
//     <div className="flex-1">

//       <div className="max-w-7xl mx-auto px-10 py-16">

//         {/* Header */}
//         <div className="mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
//             Products
//           </h1>
//           <p className="text-gray-700 mt-3 text-lg">
//             Browse and explore available products
//           </p>
//         </div>

//         {/* Search + Filter Panel */}
//         <div className="mb-14 bg-white/80 border border-white/50 shadow-xl rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-300">

//           {/* Search */}
//           <div className="relative w-full md:w-96 group">
//             <input
//               type="text"
//               placeholder="Search products..."
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//             />
//             <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-indigo-500 transition">
//               🔍
//             </span>
//           </div>

//           {/* Category Filter */}
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//           >
//             <option value="All">All Categories</option>
//             <option value="beauty">Beauty</option>
//             <option value="furniture">Furniture</option>
//             <option value="footwear">Footwear</option>
//             <option value="fragrances">Fragrances</option>
//           </select>

//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">

//           {filteredProducts.length === 0 ? (
//             <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
//               <div className="text-7xl mb-6">📦</div>
//               <h2 className="text-2xl font-semibold text-gray-900">
//                 No Products Found
//               </h2>
//               <p className="text-gray-700 mt-3 text-lg">
//                 Try adjusting your search or filters.
//               </p>
//             </div>
//           ) : (
//             filteredProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="block group"
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





// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "../hooks/useProductsearch"
// import Link from "next/link"

// const ProductsBoard = ({ products }) => {

//   const { filteredProducts, setSearchTerm, category, setCategory } =
//     useProductSearch(products)

//   return (
//     <div
//       className="min-h-screen relative bg-cover bg-center">

//       {/* Overlay Layer */}
//       {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div> */}

//       {/* Content Layer */}
//       <div className="relative z-10">

//         <div className="max-w-7xl mx-auto px-6 py-16">

//           {/* Header */}
//           <div className="mb-14">
//             <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
//               Products
//             </h1>
//             <p className="text-gray-600 mt-3 text-lg">
//               Browse and explore available products
//             </p>
//           </div>

//           {/* Search + Filter Panel */}
//           <div className="mb-16 bg-white/80 backdrop-blur-md border border-white/50 shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-300">

//             {/* Search */}
//             <div className="relative w-full md:w-96 group">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//               />
//               <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-indigo-500 transition">
                
//               </span>
//             </div>

//             {/* Category Filter */}
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//             >
//               <option value="All">All Categories</option>
//               <option value="beauty">Beauty</option>
//               <option value="furniture">Furniture</option>
//               <option value="footwear">Footwear</option>
//               <option value="fragrances">Fragrances</option>
//             </select>

//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">

//             {filteredProducts.length === 0 ? (
//               <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
//                 <div className="text-7xl mb-6">📦</div>
//                 <h2 className="text-2xl font-semibold text-gray-800">
//                   No Products Found
//                 </h2>
//                 <p className="text-gray-600 mt-3 text-lg">
//                   Try adjusting your search or filters.
//                 </p>
//               </div>
//             ) : (
//               filteredProducts.map((product) => (
//                 <Link
//                   key={product.id}
//                   href={`/products/${product.id}`}
//                   className="block group"
//                 >
//                   <Card
//                     image={product.thumbnail}
//                     title={product.title}
//                     price={product.price}
//                     description={product.description}
//                   />
//                 </Link>
//               ))
//             )}

//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductsBoard




























// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "../hooks/useProductsearch"
// import Link from "next/link"

// const ProductsBoard = ({ products }) => {

//   const { filteredProducts, setSearchTerm, category, setCategory } =
//     useProductSearch(products)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-gray-100">

//       <div className="max-w-7xl mx-auto px-6 py-14">

//         {/* Header */}
//         <div className="mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
//             Products
//           </h1>
//           <p className="text-gray-500 mt-3 text-lg">
//             Browse and explore available products
//           </p>
//         </div>

//         {/* Search + Filter Panel */}
//         <div className="mb-14 bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-300">

//           {/* Search */}
//           <div className="relative w-full md:w-96 group">
//             <input
//               type="text"
//               placeholder="Search products..."
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//             />
//             <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-indigo-500 transition">
//               🔍
//             </span>
//           </div>

//           {/* Category Filter */}
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-400 transition-all duration-300"
//           >
//             <option value="All">All Categories</option>
//             <option value="beauty">Beauty</option>
//             <option value="furniture">Furniture</option>
//             <option value="footwear">Footwear</option>
//             <option value="fragrances">Fragrances</option>
//           </select>

//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">

//           {filteredProducts.length === 0 ? (
//             <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
//               <div className="text-7xl mb-6">📦</div>
//               <h2 className="text-2xl font-semibold text-gray-800">
//                 No Products Found
//               </h2>
//               <p className="text-gray-500 mt-3 text-lg">
//                 Try adjusting your search or filters.
//               </p>
//             </div>
//           ) : (
//             filteredProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="block group"
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






//code 2nd
// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "../hooks/useProductsearch"
// import Link from "next/link"

// const ProductsBoard = ({ products }) => {

//   const { filteredProducts, setSearchTerm, category, setCategory } =
//     useProductSearch(products)

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 py-12">

//         {/* Header Section */}
//         <div className="mb-10">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Products
//           </h1>
//           <p className="text-gray-500 mt-2">
//             Browse and explore available products
//           </p>
//         </div>

//         {/* Search + Filter Section */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

//           {/* Search Input */}
//           <div className="relative w-full md:w-80">
//             <input
//               type="text"
//               placeholder="Search products..."
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
//             />
//             <span className="absolute left-3 top-2.5 text-gray-400">
//               🔍
//             </span>
//           </div>

//           {/* Category Filter */}
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
//           >
//             <option value="All">All Categories</option>
//             <option value="beauty">Beauty</option>
//             <option value="furniture">Furniture</option>
//             <option value="footwear">Footwear</option>
//             <option value="fragrances">Fragrances</option>
//           </select>

//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">

//           {filteredProducts.length === 0 ? (
//             <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
//               <div className="text-6xl mb-4">📦</div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 No Products Found
//               </h2>
//               <p className="text-gray-500 mt-2">
//                 Try adjusting your search or filters.
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







// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "../hooks/useProductsearch"
// import Link from "next/link"

// const ProductsBoard = ( {products} ) => {    

//   const { filteredProducts, setSearchTerm, category, setCategory } = useProductSearch(products)

//   return (
//     <div className="min-h-screen bg-gray-50">

//       <div className="max-w-7xl mx-auto px-6 py-10">
        
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
            
//             <h1 className="text-3xl mt-3 font-bold text-gray-800 inline-flex self-start">
//               Products
//             </h1>
//             <div>  
//               <select value={category} onChange={(e) => setCategory(e.target.value)}
//                 className="bg-blue-200 text-blue-500 px-4 py-1.5 max-w-48 rounded mr-2">
//                 <option value="All">All</option>
//                 <option value="beauty">Beauty</option>
//                 <option value="furniture">Furniture</option>
//                 <option value="Footwear">Footwear</option>
//                 <option value="fragrances">Fragrances</option>
//               </select>
//               <input type="text" placeholder="Search Product" onChange={(e) =>setSearchTerm(e.target.value)}
//                 className="bg-blue-200 text-blue-500 rounded h-8 max-w-48 placeholder:text-blue-500 px-2 mr-2 mt-2" />
//           </div>
//           </div>
      
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"> 
            
//             {filteredProducts.length === 0? (<p className="col-span-full text-center text-red-700 py-10 mt-30">No Products Found</p>) : 
//             ((filteredProducts?.map((product) => (
//                 <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="block"
//                 >
//                   <Card
//                   key={product.id}
//                   image={product.thumbnail}
//                   title={product.title}
//                   price={product.price}
//                   description={product.description}
//                   />
//                 </Link>
//             )))
//             )}
//         </div>

//       </div>

//     </div>
//   )
// }

// export default ProductsBoard
