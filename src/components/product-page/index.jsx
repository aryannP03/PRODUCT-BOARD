import { getProducts } from "@/utils/productService"
import ProductsBoard from "./product-board"

export default async function ProductsPage() {
  try {
    const products = await getProducts()
    return <ProductsBoard products={products} />
  } catch (error) {
    console.error("Error fetching products:", error)

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Failed to load products
          </h2>
          <p className="text-gray-500 mt-2">
            Please try again later.
          </p>
        </div>
      </div>
    )
  }
}