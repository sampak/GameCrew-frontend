import AuthLayout from "../../../components/AuthLayout";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import CTAButton from "../../../components/CTAButton";
import LoginMethods from "../../../components/LoginMethods";
import { useNavigate } from "react-router-dom";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm();

  const loginValue = watch("login");
  const emailValue = watch("email");
  const passwordValue = watch("password");
  const repasswordValue = watch("repassword");
  const isError = !!errors.login || !!errors.email || !!errors.password || !!errors.repassword

  useEffect(() => {
    trigger();
  }, [loginValue, passwordValue, emailValue, repasswordValue, trigger]);

  const handleSignUp = (data: FieldValues) => {
    console.log("sign in", data)
  }
  
  const handleClickAccount = () => navigate("/auth/sign-in");
  

  return (
    <AuthLayout>
      <div className="w-full flex flex-col gap-7">
        <LoginMethods />
        <div className="relative my-2 w-full inline-flex items-center justify-center w-full">
          <hr className="w-full h-px bg-deepNavy-500 border-0 absolute top-1/2 " />
          <span className="absolute px-3 font-medium -translate-x-1/2 top-1/2 bg-white -translate-y-1/2 left-1/2 text-deepNavy-500">or</span>
        </div>

        <form className="w-full flex gap-5 flex-col" onSubmit={handleSubmit(handleSignUp)}>

        <Controller
          name="login"
          control={control}
          rules={{ required: true }}
          defaultValue="" // Ensuring the initial value is an empty string
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              value={value ?? ''} // Ensuring the value is always defined
              onChange={(text) => onChange(text)}
              placeholder="Enter login"
              label=""
              onBlur={onBlur}
              ref={ref}
            />
          )}
      />

        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          defaultValue="" // Ensuring the initial value is an empty string
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              value={value ?? ''} // Ensuring the value is always defined
              onChange={(text) => onChange(text)}
              placeholder="Enter E-Mail"
              label=""
              onBlur={onBlur}
              ref={ref}
            />
          )}
      />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          defaultValue="" // Ensuring the initial value is an empty string
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              value={value ?? ''} // Ensuring the value is always defined
              onChange={(text) => onChange(text)}
              placeholder="Enter password"
              label=""
              type="password"
              onBlur={onBlur}
              ref={ref}
            />
          )}
      />
              <Controller
          name="repassword"
          control={control}
          rules={{ required: true }}
          defaultValue="" // Ensuring the initial value is an empty string
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input
              value={value ?? ''} // Ensuring the value is always defined
              onChange={(text) => onChange(text)}
              placeholder="Enter password again"
              label=""
              type="password"
              onBlur={onBlur}
              ref={ref}
            />
          )}
      />
        <Button isDisabled={isError} className="mt-5">Sign up</Button>
        </form>

        <CTAButton onClick={handleClickAccount} className="flex justify-center">Already have account sign in!</CTAButton>
      </div>
    </AuthLayout>
  )
}

export default SignUp;