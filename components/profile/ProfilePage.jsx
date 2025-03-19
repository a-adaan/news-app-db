import ProfileUpdateForm from "./ProfileUpdateForm";

export default function ProfilePage({ user }) {
  return (
    <div className="lg:w-[600px] w-full px-3 lg:p-0">
      <p className="text-black text-[32px] font-[900] text-center mb-10">
        Profile
      </p>
      <ProfileUpdateForm user={user} />
    </div>
  );
}
