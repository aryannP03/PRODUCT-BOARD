import Navigation from '@/common/navbar/navigation'

export default function AppLayout({ children }) {
  return (
      <div className='flex flex-col md:flex-row'>
      <div className="md:w-64 md:sticky md:top-0 md:h-screen bg-white border-r">
        <Navigation />
      </div>
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  )
}