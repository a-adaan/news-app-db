"use server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

//register user
export const otpEmail = async (data) => {
  try {
    return;
  } catch (error) {
    console.log(
      "🚀 ~ registerUser ~ error:",
      error.response?.data || error.message || error
    );
    return { message: error.response?.data.message, status: 401 };
  }
};
