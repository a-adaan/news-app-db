import LoadingWrapper from "@/components/LoaddingWrapper";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main className="container flex flex-col justify-center my-12 h-[60vh] lg:h-[80vh]">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        Create Account
      </p>
      <RegisterForm />
      <p className="text-center mt-12">
        Already have a account?
        <LoadingWrapper
          link={"/auth/login"}
          cls="text-base font-[800] text-primary ml-2"
        >
          Log In
        </LoadingWrapper>
      </p>
    </main>
  );
}
