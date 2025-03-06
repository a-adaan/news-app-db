import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${url}/auth/register`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("🚀 ~ registerUser ~ res:", res);

    return res.data;
  } catch (error) {
    console.log("🚀 ~ registerUser ~ error:", error);
  }
};
