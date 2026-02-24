import ProfileDropdown from "@/components/profile-dropdown";
import Image from "next/image";

export default function StoreLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          <Image
            src="/logo-purple-2.png"
            alt="Product Board Logo"
            width={200}
            height={60}
            className="h-12 w-auto scale-149"
            priority
          />

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <span className="cursor-pointer hover:text-purple-600">Beauty</span>
            <span className="cursor-pointer hover:text-purple-600">Furniture</span>
            <span className="cursor-pointer hover:text-purple-600">Daily</span>
            <span className="cursor-pointer hover:text-purple-600">Fragrance</span>
          </nav>

          <div className="flex items-center gap-5 text-xl">
            
            <ProfileDropdown />
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-gray-200 mt-20 py-10 text-center text-sm text-gray-500">
        © 2026 Product Store. All rights reserved.
      </footer>

    </div>
  );
}