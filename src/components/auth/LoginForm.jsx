import { useForm } from "react-hook-form";
import Field from "../common/Field";
import Button from "../Layout/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'

const LoginForm = () => {
  const navigate = useNavigate() 
  const {setAuth} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    // Make an API Call
    //Will Return Tokens and Logged in user information
    
    const user = {...formData};
    setAuth({user})
    navigate("/")
  };

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 ${errors.email ? "border-red-500" : "border-gray-200"}`}
          type="email"
          name="email"
          id="email"
        />
      </Field>

      <Field label="Password" error={errors.Password}>
        <input
          {...register("Password", {
            required: "Password is Required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 ${errors.email ? "border-red-500" : "border-gray-200"}`}
          type="Password"
          name="Password"
          id="Password"
        />
      </Field>

      <button
        className="bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90 w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 "
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
