import { getProductById } from '@/utils/productService'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductDetailPage({ params }) {

  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen text-white px-6 py-12">

      <div className="max-w-6xl mx-auto space-y-8">

        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
        >
          Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-950 border border-white/10 rounded-xl p-8">

          {/* Image Section */}
          <div className="flex items-center justify-center bg-[#1c1c22] rounded-xl p-6">
            <div className="relative w-full h-80 md:h-105">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-8">

            <div className="space-y-5">

              <p className="text-sm uppercase tracking-wide text-gray-400">
                {product.category}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {product.title}
              </h1>

              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>

            </div>

            <p className="text-3xl font-bold text-purple-400">
              ₹{product.price}
            </p>

          </div>

        </div>

      </div>
    </div>
  )
}