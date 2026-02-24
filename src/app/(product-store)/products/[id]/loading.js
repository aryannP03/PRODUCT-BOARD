export default function Loading() {
  return (
    <div className="p-8">
      
      <div className="h-6 w-20 bg-white/10 rounded mb-6 animate-pulse" />

      <div className="border border-white/10 rounded-2xl p-8 flex gap-10 animate-pulse">
        
        <div className="w-100 h-100 bg-white/10 rounded-xl" />

        <div className="flex-1 space-y-6">
          
          <div className="h-4 w-24 bg-white/10 rounded" />

          <div className="space-y-3">
            <div className="h-10 w-3/4 bg-white/10 rounded" />
            <div className="h-10 w-1/2 bg-white/10 rounded" />
          </div>

          <div className="space-y-2">
            <div className="h-4 w-full bg-white/10 rounded" />
            <div className="h-4 w-5/6 bg-white/10 rounded" />
            <div className="h-4 w-2/3 bg-white/10 rounded" />
          </div>

          <div className="h-8 w-24 bg-white/10 rounded" />
        </div>

      </div>
    </div>
  )
}