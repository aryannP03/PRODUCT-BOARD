'use client'
import { useState } from "react";
import { products } from "../../../../data/products";
 
 function useProductSearch() {
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("All")

    const filteredProducts = products.filter((product) => {
        const search = product.title.toLowerCase().includes(searchTerm.toLowerCase())
        console.log("Prod cat is :", product.category);
        
        const filtercategory = category === "All" || product.category === category

        return filtercategory && search
    }
    ) 

    
    return { filteredProducts, setSearchTerm, setCategory, category }
 }
 
 export default useProductSearch
 