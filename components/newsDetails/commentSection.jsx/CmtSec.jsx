import ShowCmt from "./ShowCmt";
import SubmitCmt from "./SubmitCmt";

export default function CmtSec() {
  return (
    <div className="w-full mt-[48px]">
      <SubmitCmt />
      <div className="w-full h-[1px] bg-brdr mt-8 mb-6"></div>
      <ShowCmt />
    </div>
  );
}
