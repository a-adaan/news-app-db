import { getPrivacy } from "../actions/common/pages";

export default async function Privacy() {
  const privacy = await getPrivacy();
  // console.log("🚀 ~ Privacy ~ privacy:", privacy?.data?.page_content);
  return (
    <main className="container flex flex-col my-12">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        Privacy Policy
      </p>
      <p
        className="text-black text-sm font-semibold mt-4"
        dangerouslySetInnerHTML={{ __html: privacy?.data?.page_content }}
      ></p>
    </main>
  );
}
