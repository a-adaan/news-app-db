"use server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// get page content
export const getPrivacy = async () => {
  try {
    const res = await axios.get(`${url}/pages/privacy-policy`);

    // console.log("🚀 ~ get-privacy ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ get-privacy ~ error:", error);
  }
};

// get terms content
export const getTerms = async () => {
  try {
    const res = await axios.get(`${url}/pages/terms-conditions`);

    // console.log("🚀 ~ get-terms ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ get-terms ~ error:", error);
  }
};
