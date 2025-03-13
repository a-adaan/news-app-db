import { getTerms } from "../actions/common/pages";

export default async function TermsnConditions() {
  const terms = await getTerms();
  // console.log("🚀 ~ TermsnConditions ~ terms:", terms?.data?.page_content);
  return (
    <main className="container flex flex-col justify-start my-12 min-h-[80svh]">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        Terms and Conditions
      </p>
      <p
        className="text-black text-sm font-semibold mt-4"
        dangerouslySetInnerHTML={{ __html: terms?.data?.page_content }}
      ></p>
    </main>
  );
}
