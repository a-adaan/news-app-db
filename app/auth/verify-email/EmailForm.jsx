"use client";
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
  const handleLoginForm = (data) => {
    setIsLoading(true);
    console.log("🚀 ~ handleContactForm ~ data:", data);
    addToast({
      title: "Success",
      description: "Logged in successfully",
      color: "success",
    });
    router.push("/auth/otp");
    reset();
    // setIsLoading(false);
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
