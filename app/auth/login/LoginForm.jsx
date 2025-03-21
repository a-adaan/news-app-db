"use client";
import { loginUser } from "@/app/actions/auth/Login";
import { Input, Button, addToast } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);
  const router = useRouter();
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleLoginForm = async (data) => {
    setIsLoading(true);
    // console.log("🚀 ~ handleContactForm ~ data:", data);
    const resp = await loginUser(data);
    // console.log("🚀 ~ handleLoginForm ~ resp:", resp);
    if (resp?.status === 200) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("userId", JSON.stringify(resp?.user?.id));
        window.localStorage.setItem(
          "userImg",
          resp?.user.profile_image
            ? `${process.env.NEXT_PUBLIC_IMG_URL}${resp?.user.profile_image}`
            : "/common/default-user.png"
        );
      }
      addToast({
        title: "Success",
        description: "Logged in successfully",
        color: "success",
      });
      router.push("/");
    } else {
      addToast({
        title: "Error",
        description: resp?.message,
        color: "danger",
      });
    }
    reset();
    setIsLoading(false);
  };
  return (
    <div className=" w-full">
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className="flex flex-col justify-center"
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
        <div className="group mt-5 mb-16">
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
        <Button
          isLoading={isLoading}
          type="submit"
          radius="sm"
          color="default"
          className="bg-black text-white w-full h-[41px] text-base font-extrabold"
        >
          Log In
        </Button>
      </form>
    </div>
  );
}
