import Card from "@/common/card/card"
import { products } from "../../../data/products"

const ProductsPage = () => {
  return (
  <div>
    <div className="max-w-[85%] bg-gray-800 rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 mx-25 gap-4 justify-items-center">  
      {products?.map((product) => (
        
        <Card key={product.id} image={product.image} title={product.title} price={product.price} description={product.description} />
      ))}
    </div>  
  </div>
  )
}

export default ProductsPage