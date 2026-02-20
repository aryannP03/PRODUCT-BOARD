'use client'
import { useState, useMemo } from "react"

function useProductSearch(products = []) {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("All")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const Search = product.title.toLowerCase().includes(searchTerm.toLowerCase())

      const selectCategory = category === "All" || product.category.toLowerCase() === category.toLowerCase()

      return selectCategory && Search
    })
  }, [products, searchTerm, category])

  return {
    filteredProducts,
    setSearchTerm,
    setCategory,
    category
  }
}

export default useProductSearch
