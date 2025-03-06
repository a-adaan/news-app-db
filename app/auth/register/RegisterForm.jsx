"use client";
import { registerUser } from "@/app/actions/auth/register";
import { Input, Button, addToast } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const pass = watch("password");
  const cPass = watch("password_confirmation");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleC, setIsVisibleC] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  /////////////////////////////////////////////////////////////////////////
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);
  ////////////////////////////////////////////////////////////////////////
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleVisibilityC = () => {
    setIsVisibleC(!isVisibleC);
  };
  /////////////////////////////////////////////////////////////////////////
  const handleRegisterForm = async (data) => {
    setIsLoading(true);
    // console.log("🚀 ~ handleContactForm ~ data:", data);
    try {
      reset();
      const response = await registerUser(data);
      console.log("🚀 ~ handleRegisterForm ~ response:", response);
      if (response?.status === "success") {
        addToast({
          title: "Success",
          description: response.message,
          color: "success",
        });
        router.push("/auth/login");
      } else {
        addToast({
          title: "Error",
          description: response.message,
          color: "Danger",
        });
        setIsLoading(false);
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: error.message,
        color: "Danger",
      });
      setIsLoading(false);
      console.log("🚀 ~ handleRegisterForm ~ error:", error.message);
    }
  };
  ////////////////////////////////////////////////////////////////////////////
  return (
    <div className="px-3 md:px-20">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="flex flex-col justify-center space-y-5"
      >
        <Input
          errorMessage={() => (
            <span className="text-sm font-semibold">
              Email field is required!
            </span>
          )}
          isInvalid={errors.email}
          label="Email"
          type="email"
          variant="bordered"
          {...register("email", { required: true })}
        />
        <div className="group">
          <Input
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none h-full text-brdr group-focus-within:text-black"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            }
            errorMessage={() => (
              <span className="text-sm font-semibold">
                {errors.password?.message}
              </span>
            )}
            isInvalid={errors.password}
            label="Password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            {...register("password", {
              required: true,
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
              maxLength: {
                value: 10,
                message: "Password must be less than 10 characters",
              },
            })}
          />
        </div>
        <div className="group">
          <Input
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none h-full text-brdr group-focus-within:text-black"
                type="button"
                onClick={toggleVisibilityC}
              >
                {isVisibleC ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            }
            errorMessage={() => (
              <span className="text-sm font-semibold">
                Password did not match!
              </span>
            )}
            isInvalid={pass !== cPass}
            label="Confirm Password"
            type={isVisibleC ? "text" : "password"}
            variant="bordered"
            {...register("password_confirmation", { required: true })}
          />
        </div>
        <Button
          isLoading={isLoading}
          type="submit"
          radius="sm"
          color="default"
          className="bg-black text-white w-full h-[41px] text-base font-extrabold "
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}
