'use client'
import { useState } from "react";
import { products } from "../../../../data/products";
 
 function useProductSearch() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    
    return { filteredProducts, setSearchTerm }
 }
 
 export default useProductSearch
 