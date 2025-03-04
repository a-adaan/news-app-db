import LoadingWrapper from "@/components/LoaddingWrapper";
import LoginForm from "./LoginForm";

export default function page() {
  return (
    <main className="container flex flex-col my-12 items-center w-full">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        Log In
      </p>
      <LoginForm />
      <div className="flex flex-col items-center mt-10 gap-3">
        <LoadingWrapper
          link={"/auth/verify-email"}
          cls="text-base font-[800] text-primary"
        >
          Forgot your password?
        </LoadingWrapper>
        <p>
          Don&apos;t have a account?{" "}
          <LoadingWrapper
            link={"/auth/register"}
            cls="text-base font-[800] text-primary"
          >
            Sign up now
          </LoadingWrapper>
        </p>
      </div>
    </main>
  );
}
