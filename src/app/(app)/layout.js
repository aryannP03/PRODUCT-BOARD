import Navigation from '@/common/navbar/navigation'

export default function AppLayout({ children }) {
  return (
      <div className='flex flex-col md:flex-row h-[100vh]'>
      <Navigation />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}
