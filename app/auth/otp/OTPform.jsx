"use client";
import { Button, addToast, InputOtp } from "@heroui/react";
import { useForm } from "react-hook-form";
import ResendOtp from "./ResendOtp";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OTPform() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOTPSubmit = (data) => {
    setIsLoading(true);
    console.log("🚀 ~ handleOTPSubmit ~ data:", data);
    addToast({
      title: "Success",
      description: "OTP verified successfully",
      color: "success",
    });
    router.push("/auth/reset-password");
    reset();
    // setIsLoading(false);
  };
  const pathname = usePathname();
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <div className="w-full mt-[56px]">
      <form
        onSubmit={handleSubmit(handleOTPSubmit)}
        className="flex flex-col justify-center items-center space-y-8"
      >
        <InputOtp
          length={4}
          variant="underlined"
          classNames={{
            segmentWrapper: "gap-x-10 ",
            segment: [
              "data-[active=true]:border-primary",
              "data-[active=true]:text-primary",
              "data-[has-value=true]:border-primary",
              "data-[has-value=true]:text-primary",
            ],
          }}
          {...register("otp", { required: true })}
          isInvalid={errors.otp}
          errorMessage={() => (
            <span className="text-sm font-semibold">OTP is required!</span>
          )}
        />
        <ResendOtp />
        <Button
          isLoading={isLoading}
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
