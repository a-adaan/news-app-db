import { getAllPages, getPageContent } from "@/app/actions/common/pages";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    // Fetch page content
    const pageslugs = await getAllPages();

    return pageslugs.map((page) => ({ name: page?.slug }));
  } catch (error) {
    console.error("Error fetching page content:", error);
  }
}

export default async function page({ params }) {
  const { name } = await params;
  //   console.log("🚀 ~ page ~ name:", name);
  const content = await getPageContent(name);

  return (
    <main className="container flex flex-col justify-start my-12 min-h-[80svh]">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        {content?.title}
      </p>
      <p
        className="text-black text-sm font-semibold mt-4"
        dangerouslySetInnerHTML={{ __html: content?.page_content }}
      ></p>
    </main>
  );
}
