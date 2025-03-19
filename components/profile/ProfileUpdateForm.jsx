"use client";
import { useForm } from "react-hook-form";
import { Input, Button, addToast, Avatar } from "@heroui/react";
import { useState, useRef } from "react";
import { updateUser, deleteUser } from "@/app/actions/auth/Login";

export default function ProfileUpdateForm({ user }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: user });

  const [isLoading, setIsLoading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(
    user?.profile_image
      ? `${process.env.NEXT_PUBLIC_IMG_URL}${user?.profile_image}`
      : "/common/default-user.png"
  );
  const fileInputRef = useRef(null);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(
      "userImg",
      user?.profile_image
        ? `${process.env.NEXT_PUBLIC_IMG_URL}${user?.profile_image}`
        : "/common/default-user.png"
    );
  }

  const handleUpdate = async (data) => {
    console.log("🚀 ~ handleUpdate ~ data:", data);
    setIsLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      // Skip id and email fields
      if (key === "id" || key === "email") {
        return;
      }

      // Special handling for profile_image
      if (key === "profile_image") {
        if (data[key] && data[key][0]) {
          formData.append("profile_image", data[key][0]);
        }
      } else {
        formData.append(key, data[key] || "");
      }
    });

    try {
      const response = await updateUser(formData);
      if (response?.status === 200) {
        addToast({
          title: "Success",
          description: response.data?.message || "User has been updated",
          color: "success",
        });

        // Force a hard refresh of the page to ensure all data is updated
        window.location.reload();
      } else {
        addToast({
          title: "Error",
          description: response.message || "Something went wrong",
          color: "danger",
        });
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    addToast({
      title: "Confirm Deletion",
      description:
        "Are you sure you want to delete your account? This action cannot be undone.",
      color: "warning",
      timeout: 2000,
      shouldShowTimeoutProgess: true,
      endContent: (
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="bordered"
            color="danger"
            onPress={performDelete}
          >
            Yes
          </Button>
          <Button
            size="sm"
            variant="bordered"
            color="success"
            onPress={() => {
              addToast({
                title: "Cancelled",
                description: "Account deletion cancelled",
                color: "success",
              });
            }}
          >
            No
          </Button>
        </div>
      ),
    });
    setIsLoading(false);
  };

  async function performDelete() {
    setIsLoading(true);
    try {
      const response = await deleteUser(user.id);
      if (response?.status === 200) {
        // Clear localStorage
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("userId");
          window.localStorage.removeItem("userImg");
        }

        addToast({
          title: "Success",
          description: "Account deleted successfully",
          color: "success",
        });

        // Use window.location for a complete page navigation
        window.location.href = "/";
      } else {
        addToast({
          title: "Error",
          description: response.message || "Failed to delete account",
          color: "danger",
        });
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
        "image/svg+xml",
      ];
      if (!validTypes.includes(file.type)) {
        addToast({
          title: "Invalid File",
          description:
            "Please select a valid image file (JPEG, PNG, JPG, GIF, SVG)",
          color: "danger",
        });
        return;
      }

      // Update the form value
      setValue("profile_image", e.target.files);

      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);

      // Show success toast
      addToast({
        title: "Image Selected",
        timeout: 1000,
        description: "Your profile image will be updated when you save",
        color: "success",
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative inline-block mb-10 ring-2 ring-primary rounded-full">
        <Avatar className="w-[105px] h-[105px]" src={avatarPreview} />
        <button
          type="button"
          onClick={triggerFileInput}
          className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Upload profile image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="flex flex-col gap-4 w-full font-semibold"
      >
        {/* Hidden file input controlled by the button in the avatar */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />

        <Input
          label="Username"
          {...register("username", { required: true })}
          isInvalid={errors.username}
        />
        <Input
          label="name"
          {...register("name", { required: true })}
          isInvalid={errors.name}
        />
        <div className="hover:cursor-not-allowed">
          <Input isDisabled label="Email" type="email" {...register("email")} />
        </div>
        <Input label="Bio" {...register("bio", { required: true })} />
        <Input label="Country" {...register("country")} />

        <div className="flex items-center gap-5 mt-10">
          <Button
            isLoading={isLoading}
            type="submit"
            className="bg-black text-white w-full"
          >
            Update Profile
          </Button>
          <Button
            onPress={handleDelete}
            color="danger"
            variant="bordered"
            className="w-full data-[hover=true]:text-white data-[hover=true]:bg-danger-500"
          >
            Delete Account
          </Button>
        </div>
      </form>
    </div>
  );
}
