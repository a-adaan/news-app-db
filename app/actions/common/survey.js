"use server";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// get all survey
export const getAllsurvey = async () => {
  try {
    const res = await axios.get(`${url}/survey`);

    // console.log("🚀 ~ getSingleNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getAllsurvey ~ error:", error);
  }
};

// get all survey
export const submitSurvey = async (data) => {
  try {
    const res = await axios.post(`${url}/submit-vote`, data);

    // console.log("🚀 ~ getSingleNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getAllsurvey ~ error:", error);
  }
};
