import Card from "@/common/card/card"
import { products } from "../../../data/products"

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Products
            </h1>
            <p className="text-gray-500 mt-1">
            </p>
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products?.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default ProductsPage












// import Card from "@/common/card/card"
// import { products } from "../../../data/products"

// const ProductsPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-10">
      
//       <div className="max-w-7xl mx-auto px-6">
        
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">
//           Products
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products?.map((product) => (
//             <Card
//               key={product.id}
//               image={product.image}
//               title={product.title}
//               price={product.price}
//               description={product.description}
//             />
//           ))}
//         </div>

//       </div>

//     </div>
//   )
// }

// export default ProductsPage
