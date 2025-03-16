import LoadingWrapper from "@/components/LoaddingWrapper";
import LoginForm from "./LoginForm";

export default function page() {
  return (
    <main className="container flex items-center justify-center w-full lg:h-[65vh] my-[100px]">
      <div className="lg:w-[600px] border border-brdr p-10 lg:p-16 rounded-[17px]">
        <p className="text-black text-[32px] font-[900] text-center mb-10">
          Log In
        </p>
        <LoginForm />
        <div className="flex flex-col items-center mt-12 gap-3">
          <LoadingWrapper
            link={"/auth/verify-email"}
            cls="text-base font-[800] text-primary"
          >
            Forgot your password?
          </LoadingWrapper>
          <p className="text-center">
            Don&apos;t have a account?{" "}
            <LoadingWrapper
              link={"/auth/register"}
              cls="text-base font-[800] text-primary"
            >
              Sign up now
            </LoadingWrapper>
          </p>
        </div>
      </div>
    </main>
  );
}
