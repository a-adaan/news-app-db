"use client";
import { Button, addToast, InputOtp } from "@heroui/react";
import { useForm } from "react-hook-form";

export default function OTPform() {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

  const handleOTPSubmit = (data) => {
    console.log("🚀 ~ handleOTPSubmit ~ data:", data);
    addToast({
      title: "Success",
      description: "OTP verified successfully",
      color: "success",
    });
    reset();
  };

  return (
    <div className="px-3 md:px-20 w-full mt-[56px]">
      <form
        onSubmit={handleSubmit(handleOTPSubmit)}
        className="flex flex-col justify-center items-center space-y-8"
      >
        <InputOtp
          length={4}
          variant="underlined"
          control={control}
          name="otp"
          rules={{ required: "OTP is required" }}
        />
        {errors.otp && (
          <p className="text-red-500 text-sm">{errors.otp.message}</p>
        )}
        <Button
          type="submit"
          radius="sm"
          color="default"
          className="bg-black text-white w-full h-[41px] text-base font-extrabold"
        >
          Verify OTP
        </Button>
      </form>
    </div>
  );
}
