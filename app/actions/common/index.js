"use server";
import axios from "axios";
import { cookies } from "next/headers";

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

// get slider category news
export const getSliderCategoryNews = async (id) => {
  try {
    const res = await axios.get(`${url}/slider/category/${id}`);

    // console.log("🚀 ~ getSliderNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log(
      "🚀 ~ getNews ~ error:",
      error.response?.data || error.message || error
    );
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
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
};

// get popular news
export const getPopularNews = async () => {
  try {
    const res = await axios.get(`${url}/popular-news`);

    // console.log("🚀 ~ getPopularNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

// get single news
export const getSingleNews = async (id) => {
  try {
    const res = await axios.get(`${url}/news/${id}`);

    // console.log("🚀 ~ getSingleNews ~ res:", res);
    return res.data;
  } catch (error) {
    console.log("🚀 ~ getNews ~ error:", error);
  }
};

//get slider single news
export const getSliderSingleNews = async (id) => {
  try {
    const res = await axios.get(`${url}/slider/${id}`);

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

// get search result
export const getSearchResult = async (query) => {
  // console.log("🚀 ~ getSearchResult ~ query:", query);
  try {
    const res = await axios.post(`${url}/search`, { query: query });

    // console.log("🚀 ~ getSingleNews ~ res:", res);
    return res.data?.data;
  } catch (error) {
    // console.log("🚀 ~ getNews ~ error:", error);
    return error.response?.data || error.message || error;
  }
};

// get Video result
export const getVideos = async () => {
  try {
    const res = await axios.get(`${url}/videos?page=1`);

    // console.log("🚀 ~ getSingleNews ~ res:", res?.data?.data);
    const filteredVideo = getVideoUrlArray(res?.data?.data); // console.log("🚀 ~ getVideos ~ filteredVideo:", filteredVideo);

    return filteredVideo;
  } catch (error) {
    // console.log("🚀 ~ getNews ~ error:", error);
    return error.response?.data || error.message || error;
  }
};

function getVideoUrlArray(videosResult) {
  if (!Array.isArray(videosResult)) return [];

  return videosResult
    .filter(
      (video) =>
        video?.video != null &&
        typeof video.video === "string" &&
        video.video.trim() !== ""
    )
    .map((video) => {
      // Remove all spaces from the video URL and ensure proper encoding
      const videoPath = video.video.trim().replace(/\s+/g, "");
      return `${process.env.NEXT_PUBLIC_IMG_URL}${videoPath}`;
    });
}

// increment slider like
export async function incrementSliderLikes(id) {
  try {
    const res = await axios.post(`${url}/slider/increment-favorite`, {
      slider_id: id,
    });

    // console.log("🚀 ~ incrementSliderLikes ~ res:", res.data);
    return res.data;
  } catch (error) {
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
}

// increment news like
export async function incrementNewsLikes(id) {
  try {
    const res = await axios.post(`${url}/news/increment-favorite`, {
      news_id: id,
    });

    // console.log("🚀 ~ incrementSliderLikes ~ res:", res.data);
    return res.data;
  } catch (error) {
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
}

// submit news comment
export async function submitNewsCmt(data) {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  const userData = userCookie ? JSON.parse(userCookie?.value) : null;
  // console.log("🚀 ~ logoutUser ~ user:", userData);
  const token = userData?.token;

  try {
    const res = await axios.post(`${url}/save-comment`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("🚀 ~ incrementSliderLikes ~ res:", res.data);
    return res.data;
  } catch (error) {
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
}

// submit slider comment
export async function submitSliderCmt(data) {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  const userData = userCookie ? JSON.parse(userCookie?.value) : null;
  // console.log("🚀 ~ logoutUser ~ user:", userData);
  const token = userData?.token;

  try {
    const res = await axios.post(`${url}/save-comment`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("🚀 ~ incrementSliderLikes ~ res:", res.data);
    return res.data;
  } catch (error) {
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
}

// get web setting
export async function getWebSetting() {
  try {
    const res = await axios.get(`${url}/web-settings`);

    // console.log("🚀 ~ incrementSliderLikes ~ res:", res.data);
    return res.data?.data;
  } catch (error) {
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
}

// get breaking news
export async function getBreakingNews() {
  try {
    const res = await axios.get(`${url}/breaking-news`);

    // console.log("🚀 ~ breaking news ~ res:", res.data?.data);
    const filteredNews = res.data?.data?.map((data) => ({
      id: data?.news?.id,
      title: data?.news?.title,
    }));
    // console.log("🚀 ~ getBreakingNews ~ filteredNews:", filteredNews);
    return filteredNews;
  } catch (error) {
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
}

// contact us
export async function submitContactUS(data) {
  try {
    const res = await axios.post(`${url}/message/send`, data);

    return res.data;
  } catch (error) {
    // console.log("🚀 ~ get category News ~ error:", error);
    return error.response?.data || error.message || error;
  }
}
