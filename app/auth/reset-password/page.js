import ResetForm from "./ResetForm";

export default function ResetPassPage() {
  return (
    <main className="container flex flex-col my-12">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        Reset Password
      </p>
      <ResetForm />
      {/* <p className="text-center mt-10">
          Already have a account?
          <LoadingWrapper
            link={"/auth/login"}
            cls="text-base font-[800] text-primary ml-2"
          >
            Log In
          </LoadingWrapper>
        </p> */}
    </main>
  );
}
