import EmailForm from "./EmailForm";

export default function EmailPage() {
  return (
    <main className="container flex items-center justify-center lg:h-[65vh] my-[100px]">
      <div className="lg:w-[600px] border border-brdr p-10 lg:p-16 rounded-[17px]">
        <p className="text-black text-[28px] lg:text-[32px] font-[900] text-center mb-6">
          Enter Your Email
        </p>
        <p className="text-black text-[16px] font-[800] text-center mb-16">
          We will send you OTP to your email
        </p>
        <EmailForm />
      </div>
    </main>
  );
}
