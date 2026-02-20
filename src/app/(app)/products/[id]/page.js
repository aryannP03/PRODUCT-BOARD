// import { products } from '../../../../../data/products'
// import { notFound } from 'next/navigation'

// export default async function Page({ params }) {
//   const { id } = await params
//   console.log("PARAM ID:", id)

//   const product = products.find(
//     p => p.id.toString() === id
//   )

//   if (!product) {
//     notFound()
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//     </div>
//   )
// }


import ProductDetailPage from "@/components/product-detail";
export default ProductDetailPage