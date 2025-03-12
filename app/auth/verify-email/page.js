import EmailForm from "./EmailForm";

export default function EmailPage() {
  return (
    <main className="container flex flex-col justify-center my-12 h-[60vh] lg:h-[80vh]">
      <p className="text-black text-[32px] font-[900] text-center mb-6">
        Enter Your Email
      </p>
      <p className="text-black text-[16px] font-[800] text-center mb-16">
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
