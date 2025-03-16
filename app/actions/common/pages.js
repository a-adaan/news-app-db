"use server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// get pages
export const getAllPages = async () => {
  try {
    const res = await axios.get(`${url}/pages`);

    // console.log("🚀 ~ get-all-pages ~ res:", res?.data?.data);
    return res?.data?.data;
  } catch (error) {
    console.log("🚀 ~ get-all-pages ~ error:", error);
  }
};

// get page content
export const getPageContent = async (name) => {
  try {
    const res = await axios.get(`${url}/pages/${name}`);
    return res?.data?.data;
  } catch (error) {
    console.log("🚀 ~ get-page-content ~ error:", error);
  }
};

// get ads
export const getAd = async () => {
  try {
    const res = await axios.get(`${url}/ad`);

    // console.log("🚀 ~ get-terms ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ get-terms ~ error:", error);
  }
};
