import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;

// get news
export const getNews = async () => {
  try {
    const res = await axios.get(`${url}/news?page=1`);

    // console.log("🚀 ~ getNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

//get slider news
export const getSliderNews = async () => {
  try {
    const res = await axios.get(`${url}/slider`);

    // console.log("🚀 ~ getSliderNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

// get slider news
export const getSliderCategoryNews = async (id) => {
  try {
    const res = await axios.get(`${url}/slider/category/${id}`);

    // console.log("🚀 ~ getSliderNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

// get recent news
export const getRecentNews = async () => {
  try {
    const res = await axios.get(`${url}/recent-news?page=1`);

    // console.log("🚀 ~ getRecentNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

// get Category news
export const getCategoryNews = async (id) => {
  try {
    const res = await axios.get(`${url}/news/category/${id}?page=1`);

    // console.log("🚀 ~ getCategoryNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

// get category news
export const getPopularNews = async () => {
  try {
    const res = await axios.get(`${url}/popular-news`);

    // console.log("🚀 ~ getPopularNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

// get category news
export const getSingleNews = async (id) => {
  try {
    const res = await axios.get(`${url}/news/${id}`);

    // console.log("🚀 ~ getSingleNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

// get all categories
export const getAllCategories = async () => {
  try {
    const res = await axios.get(`${url}/categories?page=1`);

    // console.log("🚀 ~ getSingleNews ~ res:", res);
    return res.data?.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};
