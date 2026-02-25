'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useCarousel from './hooks/useCarousel'
import Link from 'next/link'
import Card from '@/common/card'

export default function FeaturedCarousel({ products }) {
  
  const {emblaRef, scrollPrev, scrollNext} = useCarousel()

  return (
    <div className="relative max-w-7xl mx-auto mb-16">

      <h2 className="text-3xl font-semibold ml-6 mb-6 mt-8">
        Featured Products
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {products?.map((product) => (
            <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
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
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronRight size={20} />
      </button>

    </div>
  )
}