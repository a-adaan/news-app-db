import ShowCmt from "./ShowCmt";
import SubmitCmt from "./SubmitCmt";

export default function CmtSec({ cmtData }) {
  // console.log("🚀 ~ CmtSec ~ cmtData:", cmtData);
  return (
    <div className="w-full mt-[48px]">
      <SubmitCmt />
      <div className="w-full h-[1px] bg-brdr mt-8 mb-6"></div>
      <div className="flex flex-col gap-3 my-2">
        {cmtData.length > 0 ? (
          cmtData.map((cmt) => <ShowCmt cmt={cmt} key={cmt?.id} />)
        ) : (
          <div className="text-center text-black text-baxs font-semibold">
            No comments yet.
          </div>
        )}
      </div>
    </div>
  );
}
