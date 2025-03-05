"use client";
import { Input, Button, addToast } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function ResetForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const pass = watch("password");
  const cPass = watch("confirm-password");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleC, setIsVisibleC] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleVisibilityC = () => {
    setIsVisibleC(!isVisibleC);
  };
  const pathname = usePathname();
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);
  const handleRegisterForm = (data) => {
    console.log("🚀 ~ handleContactForm ~ data:", data);
    addToast({
      title: "Success",
      description: "Resetting password successful",
      color: "success",
    });
    setIsLoading(true);
    router.push("/auth/login");
    reset();
    // setIsLoading(false);
  };
  return (
    <div className="px-3 md:px-20">
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="flex flex-col justify-center space-y-5"
      >
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
                Password field is required!
              </span>
            )}
            isInvalid={errors.password}
            label="Password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            {...register("password", { required: true })}
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
            {...register("confirm-password", { required: true })}
          />
        </div>
        <Button
          type="submit"
          radius="sm"
          color="default"
          isLoading={isLoading}
          className="bg-black text-white w-full h-[41px] text-base font-extrabold "
        >
          Change Password
        </Button>
      </form>
    </div>
  );
}
