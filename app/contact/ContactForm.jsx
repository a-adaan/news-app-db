"use client";
import { Input, Textarea, Button, addToast } from "@heroui/react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleContactForm = (data) => {
    console.log("🚀 ~ handleContactForm ~ data:", data);
    addToast({
      title: "Success",
      description: "Your message has been sent successfully",
      color: "success",
    });
    reset();
  };
  return (
    <div className="px-3 md:px-20">
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
          isInvalid={errors.description}
          className="w-full "
          label="Description"
          variant="bordered"
          classNames={{ innerWrapper: "md:h-[218px]" }}
          {...register("description", { required: true })}
          // eslint-disable-next-line no-console
        />
        <Button
          type="submit"
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
