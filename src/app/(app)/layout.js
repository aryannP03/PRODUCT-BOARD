// import Navigation from '@/common/navbar/navigation'

// export default function AppLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-[#0f0f12] text-white overflow-x-hidden">
//       <Navigation />
//       <main className="flex-1">
//         {children}
//       </main>
//     </div>
//   )
// }



import Navigation from '@/common/navbar/navigation'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0f0f12] text-white">

      <Navigation />

      <main className="md:ml-64">
        {children}
      </main>

    </div>
  )
}




// import Navigation from '@/common/navbar/navigation'

// export default function AppLayout({ children }) {
//   return (
//     //   <div className='flex flex-col md:flex-row'>
//     //   <div className="md:w-64 md:sticky md:top-0 md:h-screen bg-white border-r">
//     //     <Navigation />
//     //   </div>
//     //   <main className="flex-1 p-6 bg-gray-50 min-h-screen bg-cover bg-center bg-no-repeat"
//     //   style={{ backgroundImage: "url('/main-bg.jpg')" }}>
//     //     {children}
//     //   </main>
//     // </div>

//   <div className="min-h-screen relative bg-[#0f0f12] text-white overflow-hidden">

//     <div className="relative z-10 flex">
//         <Navigation />
//       {children}
//     </div>
//   </div>
//   )
// }