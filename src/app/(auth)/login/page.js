'use client'

import Input from '@/common/input'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const router = useRouter()
  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    
    document.cookie = "custom-token=12345; path=/;"
    toast.success("Welcome User")
    router.replace('/dashboard')
  }

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        
        <form onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-white shadow-lg rounded-xl p-8 space-y-6">

          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Login
          </h1>

          <div className="space-y-4">
            <Input
              control={control}
              config={{
                name: "userId", label: "User Id", placeholder: "Enter user id",
                rules: { required:"User id is required"},
                className: "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800",
                labelclassName:"text-gray-800"  

              }}
            />

            <Input
              control={control}
              config={{
                name: "password", label: "Password", placeholder: "Enter password",
                rules: { required:"Password is required"},
                className:"w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800",
                labelclassName:"text-gray-800"  
              }}
            />
          </div>

          <button
            type='submit'
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
          >
            Login
          </button>

        </form>
      </div>
  )
}
