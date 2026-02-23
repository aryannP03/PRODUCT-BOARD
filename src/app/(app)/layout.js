
import Navigation from '@/common/navbar/navigation'

export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen text-white">

      <div
        className="fixed inset-0 -z-10 bg-[#0f0f12]/40"
        style={{
          backgroundImage: "url('/main-bg.jpg')",
          backgroundSize: "130%",
          backgroundPosition: "center",
          opacity: 0.15
        }}
      />

      <Navigation />

      <main className="md:ml-64">
        {children}
      </main>

    </div>
  )
}
