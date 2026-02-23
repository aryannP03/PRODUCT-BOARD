import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
function useLogin() {
    
    const router = useRouter()
    const { control, handleSubmit } = useForm()


    const onSubmit = (data) => {
    console.log(data);
    
    document.cookie = "custom-token=12345; path=/;"
    toast.success("Welcome User")
    router.replace('/dashboard')
    }

    return { onSubmit, control, handleSubmit, router }
}

export default useLogin
