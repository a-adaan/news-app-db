"use client";
import { Input, Textarea, Button, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { submitContactUS } from "../actions/common";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleContactForm = async (data) => {
    setIsLoading(true);
    // console.log("🚀 ~ handleContactForm ~ data:", data);
    const response = await submitContactUS(data);
    if (response.status === "success") {
      addToast({
        title: "Success",
        description: response.message,
        color: "success",
      });
    } else {
      addToast({
        title: "Error",
        description: response.message,
        color: "danger",
      });
    }
    reset();
    setIsLoading(false);
  };

  return (
    <div className="px-3 md:px-20 lg:px-[130px]">
      <form
        onSubmit={handleSubmit(handleContactForm)}
        className="flex flex-col justify-center space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            errorMessage={() => (
              <span className="text-sm font-semibold">
                Name field is required!
              </span>
            )}
            isInvalid={errors.name}
            label="Name"
            type="text"
            variant="bordered"
            {...register("name", { required: true })}
          />
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
        </div>

        <Textarea
          isClearable
          errorMessage={() => (
            <span className="text-sm font-semibold">
              Description field is required!
            </span>
          )}
          isInvalid={errors.message}
          className="w-full "
          label="Message"
          variant="bordered"
          classNames={{ innerWrapper: "md:h-[218px]" }}
          {...register("message", { required: true })}
          // eslint-disable-next-line no-console
        />
        <Button
          type="submit"
          isLoading={isLoading}
          radius="sm"
          color="default"
          className="bg-black text-white w-full h-[41px] text-base font-extrabold "
        >
          Send
        </Button>
      </form>
    </div>
  );
}
