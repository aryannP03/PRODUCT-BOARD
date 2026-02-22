import Link from "next/link"
import useDashboard from "./hooks/useDashboard"

export default async function Dashboard() {
  
  const { totalProducts, totalCategories, avgPrice, topProducts, categoryCount } = await useDashboard()


  return (
    <div className="p-6 md:p-10 space-y-10">

      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Box title="Total Products" value={totalProducts} />
        <Box title="Categories" value={totalCategories} />
        <Box title="Average Price" value={`₹${avgPrice}`} />
      </div>

      <div className="bg-zinc-950 border border-white/10 rounded-lg p-6">
        <h2 className="font-semibold mb-4">Products by Category</h2>

        <ul className="space-y-2 text-sm text-gray-300">
          {Object.entries(categoryCount).map(([cat, count]) => (
            <li key={cat} className="flex justify-between">
              <span>{cat}</span>
              <span>{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-zinc-950 border border-white/10 rounded-lg p-6">
        <h2 className="font-semibold mb-4">
          Top 3 Expensive Products
        </h2>

        <ul className="space-y-3">
          {topProducts.map(product => (
            <li key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="flex justify-between hover:text-purple-400"
              >
                <span>{product.title}</span>
                <span className="text-purple-400">
                  ₹{product.price}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

function Box({ title, value }) {
  return (
    <div className="bg-zinc-950 border border-white/10 rounded-lg p-5">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-xl font-bold text-purple-400 mt-1">
        {value}
      </p>
    </div>
  )
}
