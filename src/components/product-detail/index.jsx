import {products}  from '../../../data/products'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export default async function ProductDetailPage({ params }) {

    const { id } = await params
  const product = products.find(p => p.id === id)
  // console.log(product);
  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow-lg p-8">

        <div className="flex items-center justify-center aspect-square">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt={product.title}
            unoptimized
            priority
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-600">
              {product.description}
            </p>

            <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>

          <div className="mt-8">
            <p className="text-2xl font-bold text-gray-900">
              ₹{product.price}
            </p>

            <button className="mt-4 w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
