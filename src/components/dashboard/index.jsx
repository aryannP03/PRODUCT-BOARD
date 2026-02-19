"use client"
import { usePathname } from "next/navigation"

const Dashboard = () => {
  
  const pathname = usePathname()
  return (
    <div className="mt-10 text-gray-500">
      <h1>This is dashboard </h1>
      <p>Path is : {pathname}</p>
      <input type="text" label="Search Product" className="bg-white" />
    </div>
  )
}

export default Dashboard