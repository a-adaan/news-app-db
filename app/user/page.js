import ProfilePage from "@/components/profile/ProfilePage";
import { getUserData } from "../actions/auth/Login";

export default async function User({ searchParams }) {
  const { userId } = await searchParams;
  //   console.log("🚀 ~ User ~ userId:", userId);
  const user = await getUserData();
  //   console.log("🚀 ~ User ~ user:", user);
  if (user.status == 500) {
    return (
      <main className="container flex items-center justify-center w-full lg:h-[65vh] my-[100px]">
        <h1>User not found</h1>
      </main>
    );
  }
  return (
    <main className="container flex items-center justify-center w-full  my-[80px]">
      <ProfilePage user={user?.data} />
    </main>
  );
}
