import {
  getAllCategories,
  getCategoryNews,
  getSliderNews,
} from "./actions/common";
import { getAllPages } from "./actions/common/pages";

export async function fetchNewsData() {
  try {
    // Fetch categories
    const categories = await getAllCategories();

    // Fetch news for each category
    const newsPromises = categories.map(async (category) => {
      const newsData = await getCategoryNews(category.id);
      const categoryNews = newsData?.data?.data || [];
      return categoryNews.map((news) => ({ from: "news", id: news.id }));
    });

    const allNewsResults = await Promise.all(newsPromises);
    const flattenedNews = allNewsResults.flat();

    return flattenedNews;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
}

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // -/category/id=''&name''
  const categories = await getAllCategories();

  const categoryurl =
    categories?.map((category) => ({
      url: `${baseUrl}/category/id=${category.id}&amp;name=${encodeURIComponent(
        category.name
      )}`,
      lastModified: new Date().toISOString(),
    })) || [];

  // -/news/news?from=news&id=31
  const fromNews = await fetchNewsData();
  const fromNewsUrls =
    fromNews?.map((news) => ({
      url: `${baseUrl}/news/news?from=${news.from}&amp;name=${news?.id}`,
      lastModified: new Date().toISOString(),
    })) || [];

  const sliderNews = await getSliderNews();
  const sliderNewsUrls =
    sliderNews?.data.map((news) => ({
      url: `${baseUrl}/news/news?from=slider&amp;name=${news?.id}`,
      lastModified: new Date().toISOString(),
    })) || [];

  const newsUrl = [...fromNewsUrls, ...sliderNewsUrls];

  // -/pages/terms-conditions
  const pageslugs = await getAllPages();

  const pagesUrl =
    pageslugs?.map((page) => ({
      url: `${baseUrl}/pages/${page?.slug}`,
      lastModified: new Date().toISOString(),
    })) || [];

  // Generate dynamic URLs
  const dynamicUrls = [...categoryurl, ...pagesUrl, ...newsUrl] || [];

  // Static URLs
  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/auth/login`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/auth/register`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/auth/otp`, lastModified: new Date().toISOString() },
    {
      url: `${baseUrl}/auth/reset-password`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/auth/verify-email`,
      lastModified: new Date().toISOString(),
    },
    { url: `${baseUrl}/category`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/latest-news`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/popular-news`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/recent-news`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/user`, lastModified: new Date().toISOString() },
  ];

  return [...staticUrls, ...dynamicUrls];
}
