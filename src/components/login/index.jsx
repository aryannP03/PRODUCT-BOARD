'use client'
import Input from '@/common/input'
import useLogin from './hooks/useLogin'

export default function LoginPage() {

  const { onSubmit, control, handleSubmit } = useLogin()

  return (
    <div className="min-h-screen bg-[#0f0f12] flex items-center justify-center px-6 text-white">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-10 space-y-8"
      >

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-purple-400 bg-clip-text">
            Sign In
          </h1>
        </div>

        <div className="space-y-5">
          <Input
            control={control}
            config={{
              name: "userId",
              label: "User Id",
              placeholder: "Enter user id",
              rules: { required: "User id is required" },
              className:
                "w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40",
              labelclassName: "text-gray-400 text-sm"
            }}
          />

          <Input
            control={control}
            config={{
              name: "password",
              label: "Password",
              placeholder: "Enter password",
              rules: { required: "Password is required" },
              className:
                "w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40",
              labelclassName: "text-gray-400 text-sm"
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-medium transition"
        >
          Login
        </button>

      </form>
    </div>
  )
}