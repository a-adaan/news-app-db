import LoadingWrapper from "@/components/LoaddingWrapper";
import OTPform from "./OTPform";

export default function OTPpage() {
  return (
    <main className="container flex items-center justify-center my-[100px]">
      <div className="lg:w-[600px] border flex flex-col items-center border-brdr p-10 lg:p-16 rounded-[17px]">
        <p className="text-black text-[32px] font-[900] text-center mb-3">
          Verification{" "}
        </p>
        <p className="text-black text-[16px] font-[800] text-center mb-5">
          Enter OTP Sent to Your Email{" "}
        </p>

        <div className="w-fit">
          <LoadingWrapper
            link={"/auth/verify-email"}
            cls="text-base text-center hover:text-primary hover:underline hover:underline-offset-2 inline-block font-[800]"
          >
            Edit Email
          </LoadingWrapper>
        </div>

        <OTPform />
      </div>
    </main>
  );
}
