import EmailForm from "./EmailForm";

export default function EmailPage() {
  return (
    <main className="container flex flex-col my-12">
      <p className="text-black text-[32px] font-[900] text-center mb-3">
        Enter Your Email
      </p>
      <p className="text-black text-[16px] font-[800] text-center mb-10">
        We will send you OTP to your email
      </p>
      <EmailForm />
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
