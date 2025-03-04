"use client";
import { Input, Button, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleLoginForm = (data) => {
    console.log("🚀 ~ handleContactForm ~ data:", data);
    addToast({
      title: "Success",
      description: "Logged in successfully",
      color: "success",
    });
    reset();
  };
  return (
    <div className="px-3 md:px-20 w-full">
      <form
        onSubmit={handleSubmit(handleLoginForm)}
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
        <Button
          type="submit"
          radius="sm"
          color="default"
          className="bg-black text-white w-full h-[41px] text-base font-extrabold"
        >
          Get OTP
        </Button>
      </form>
    </div>
  );
}
