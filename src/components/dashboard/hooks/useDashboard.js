import { getProducts } from '@/utils/productService'

async function useDashboard() {
    const products = await getProducts()
    
    const totalProducts = products?.length
    
    const categories = []
    products?.forEach(p => {
    if (!categories.includes(p.category)) {
        categories.push(p.category)
    }
    })
    const totalCategories = categories?.length
    
    let total = 0
    products.forEach(p => {total += p.price})
    const avgPrice = Math.floor(total / totalProducts)
    
    const categoryCount = {}
    products?.forEach(p => {
    categoryCount[p.category] =
        (categoryCount[p.category] || 0) + 1
    })
    
    const topProducts = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)

    
    return { products, totalProducts, totalCategories, avgPrice, topProducts, categoryCount }
}

export default useDashboard
