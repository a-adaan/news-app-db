"use server";
import axios from "axios";
import { cookies } from "next/headers";

const url = process.env.NEXT_PUBLIC_API_URL;

//login user
export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/login`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // console.log("🚀 ~ registerUser ~ res:", res.data);
    if (res.data && res?.data?.data?.access_token) {
      // Convert the user object to a JSON string before setting the cookie
      const userData = JSON.stringify({
        userId: res.data?.data?.user?.id || "01",
        token: res.data?.data?.access_token || "123",
      });

      // Get the cookieStore first
      const cookieStore = await cookies();
      // Set the cookie using the correct method
      cookieStore.set("user", userData, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
    }
    return { user: res.data?.data.user, status: 200 };
  } catch (error) {
    // console.log(
    //   "🚀 ~ registerUser ~ error:",
    //   error.response?.data || error.message || error
    // );
    return { message: error.response?.data.message, status: 401 };
  }
};

//logout user
export const logoutUser = async () => {
  try {
    // Get the cookieStore first
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");
    const userData = userCookie ? JSON.parse(userCookie?.value) : null;
    // console.log("🚀 ~ logoutUser ~ user:", userData);
    const token = userData?.token;

    if (token) {
      // Send request to backend logout endpoint with bearer token
      const res = await axios.post(
        `${url}/auth/logout`,
        {}, // Empty body or you can add any required data
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear the cookie after successful logout
      cookieStore.delete("user");

      // console.log("🚀 ~ logoutUser ~ response:", res.data);
      return { message: "Logged out successfully", status: 200 };
    } else {
      // No token found, just clear the cookie
      cookieStore.delete("user");
      return { message: "No active session found", status: 200 };
    }
  } catch (error) {
    console.log(
      "🚀 ~ logoutUser ~ error:",
      error.response?.data || error.message || error
    );

    // Get the cookieStore first
    const cookieStore = await cookies();
    cookieStore.delete("user");

    return {
      message: error.response?.data?.message || "Failed to log out",
      status: 500,
    };
  }
};

//get user data
export const getUserData = async () => {
  try {
    // Get the cookieStore first
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");
    const userData = userCookie ? JSON.parse(userCookie?.value) : null;
    // console.log("🚀 User ~ user:", userData);
    const token = userData?.token;

    if (token) {
      // Send request to backend logout endpoint with bearer token
      const res = await axios.get(`${url}/user`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("🚀 ~ getUser ~ response:", res.data);
      return { data: res?.data?.data?.user, status: 200 };
    } else {
      return { message: "No active session found", status: 500 };
    }
  } catch (error) {
    // console.log(
    //   "🚀 ~ getUser ~ error:",
    //   error.response?.data || error.message || error
    // );
    return {
      message: error.response?.data?.message || "Failed to log out",
      status: 500,
    };
  }
};

//update user data
export const updateUser = async (data) => {
  try {
    // Get the cookieStore first
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");
    const userData = userCookie ? JSON.parse(userCookie?.value) : null;
    // console.log("🚀 User ~ user:", userData);
    const token = userData?.token;

    if (token) {
      // Send request to backend logout endpoint with bearer token
      const res = await axios.post(`${url}/update-user-info`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("🚀 ~ getUser ~ response:", res.data);
      return { data: res?.data, status: 200 };
    } else {
      return { message: "No active session found", status: 500 };
    }
  } catch (error) {
    // console.log(
    //   "🚀 ~ updateUser ~ error:",
    //   error.response?.data || error.message || error
    // );
    return {
      message: error.response?.data?.message || "Failed to update",
      status: 500,
    };
  }
};

//delete user data
export const deleteUser = async (id) => {
  try {
    // Get the cookieStore first
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");
    const userData = userCookie ? JSON.parse(userCookie?.value) : null;
    // console.log("🚀 User ~ user:", userData);
    const token = userData?.token;

    if (token) {
      // Send request to backend logout endpoint with bearer token
      const res = await axios.get(`${url}/auth/delete/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      cookieStore.delete("user");

      // console.log("🚀 ~ getUser ~ response:", res.data);
      return { data: res?.data, status: 200 };
    } else {
      cookieStore.delete("user");

      return { message: "No active session found", status: 500 };
    }
  } catch (error) {
    // console.log(
    //   "🚀 ~ delete User ~ error:",
    //   error.response?.data || error.message || error
    // );
    return {
      message: error.response?.data?.message || "Failed to delete",
      status: 500,
    };
  }
};
