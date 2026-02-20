'use client'
import { useState, useMemo } from "react"
import useDebounce from "@/hooks/useDebounce"

function useProductSearch(products = []) {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("All")

  const debouncedSearch = useDebounce(searchTerm, 2000, 3)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const Search = product.title.toLowerCase().includes(debouncedSearch.toLowerCase())

      const selectCategory = category === "All" || product.category.toLowerCase() === category.toLowerCase()

      return selectCategory && Search
    })
  }, [products, debouncedSearch, category])

  return {
    filteredProducts,
    setSearchTerm,
    setCategory,
    category
  }
}

export default useProductSearch
