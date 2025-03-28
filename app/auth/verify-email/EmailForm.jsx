"use client";
import { verifyEmail } from "@/app/actions/auth/resetPass";
import { Input, Button, addToast } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleLoginForm = async (data) => {
    setIsLoading(true);
    // console.log("🚀 ~ handleContactForm ~ data:", data);
    const response = await verifyEmail(data);
    if (response.status === "success") {
      addToast({
        title: "Success",
        description: response.message,
        color: "success",
      });
      if (typeof window !== "undefined") {
        window.localStorage.setItem("otpEmail", JSON.stringify(data));
      }
      router.push("/auth/otp");
    } else {
      addToast({
        title: "Error",
        description: response.message || "Failed to Send OTP",
        color: "danger",
        timeout: 1000,
      });
      setIsLoading(false);
    }
    reset();
  };

  return (
    <div className=" w-full">
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className="flex flex-col justify-center space-y-20"
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
        <Button
          type="submit"
          radius="sm"
          isLoading={isLoading}
          color="default"
          className="bg-black text-white w-full h-[41px] text-base font-extrabold"
        >
          Get OTP
        </Button>
      </form>
    </div>
  );
}
