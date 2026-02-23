export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  const data = await res.json()
  return data.products
}

export async function getProductById(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    return null
  }

  return res.json()
}
