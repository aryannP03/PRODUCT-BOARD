
import { getProducts } from "@/utils/productService"
import ProductsBoard from "./product-board"

export default async function ProductsPage() {
  const products = await getProducts()

  return <ProductsBoard products={products} />
}







// 'use client'
// import Card from "@/common/card"
// import useProductSearch from "./hooks/useProductsearch"
// import { Suspense } from "react"
// import Link from "next/link"

// const ProductsPage = () => {

//   const { filteredProducts, setSearchTerm, category, setCategory } = useProductSearch()

//   return (
//     <div className="min-h-screen bg-gray-50">

//       <div className="max-w-7xl mx-auto px-6 py-10">
        
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
            
//             <h1 className="text-3xl mt-3 font-bold text-gray-800 inline-flex self-start">
//               Products
//             </h1>
//             <select value={category} onChange={(e) => setCategory(e.target.value)}
//               className="bg-blue-200 text-blue-500 px-4 py-1.5 max-w-48 rounded">
//               <option value="All">All</option>
//               <option value="Clothing">Clothing</option>
//               <option value="Electronics">Electronics</option>
//               <option value="Footwear">Footwear</option>
//             </select>
//             <input type="text" placeholder="Search Product" onChange={(e) =>setSearchTerm(e.target.value)}
//               className="bg-blue-200 text-blue-500 rounded h-8 max-w-48 placeholder:text-blue-500 px-2 mr-2" />
//           </div>
      
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"> 
//             {filteredProducts?.map((product) => (
//               <Link
//                 key={product.id}
//                 href={`/products/${product.id}`}
//                 className="block"
//                 >
//                   <Card
//                   key={product.id}
//                   image={product.image}
//                   title={product.title}
//                   price={product.price}
//                   description={product.description}
//                   />
//                 </Link>
//             ))}
//         </div>

//       </div>

//     </div>
//   )
// }

// export default ProductsPage
