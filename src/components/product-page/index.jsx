
import { getProducts } from "@/utils/productService"
import ProductsBoard from "./product-board"

export default async function ProductsPage() {
  const products = await getProducts()

  return <ProductsBoard products={products} />
}
