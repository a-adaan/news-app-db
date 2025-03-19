"use server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

//verify email
export const verifyEmail = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/send-otp-email`, data);
    return res.data;
  } catch (error) {
    // console.log(
    //   "🚀 ~ registerUser ~ error:",
    //   error.response?.data || error.message || error
    // );
    return { message: error.response?.data.message, status: 401 };
  }
};

//verify otp
export const verifyOTP = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/verify-otp`, data);
    return res.data;
  } catch (error) {
    // console.log(
    //   "🚀 ~ registerUser ~ error:",
    //   error.response?.data || error.message || error
    // );
    return { message: error.response?.data.message, status: 401 };
  }
};

//reset Password
export const resetPassword = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/change-password`, data);
    return res.data;
  } catch (error) {
    // console.log(
    //   "🚀 ~ registerUser ~ error:",
    //   error.response?.data || error.message || error
    // );
    return { message: error.response?.data.message, status: 401 };
  }
};
