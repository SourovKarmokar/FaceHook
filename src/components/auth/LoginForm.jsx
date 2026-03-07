import Field from "../common/Field";
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
      
    </form>
  )
}

export default LoginForm
