export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f12] text-white">

      <div className="flex flex-col items-center space-y-4">

        <div className="w-8 h-8 border-2 border-white/20 border-t-purple-500 rounded-full animate-spin"></div>

        <p className="text-sm text-gray-400 tracking-wide">
          Loading...
        </p>

      </div>

    </div>
  )
}