import ResetForm from "./ResetForm";

export default function ResetPassPage() {
  return (
    <main className="container flex items-center justify-center lg:h-[65vh] my-[100px] ">
      <div className="lg:w-[600px] border border-brdr p-10 lg:p-16 rounded-[17px]">
        <p className="text-black text-[28px] lg:text-[32px] font-[900] text-center mb-10">
          Reset Password
        </p>
        <ResetForm />
      </div>
    </main>
  );
}
