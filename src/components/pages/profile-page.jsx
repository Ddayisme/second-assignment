import authGuard from "../../hoc/authGuard";
import ProfileView from "../profile-view";

function ProfilePage() {
  return (
    <>
      <ProfileView />
    </>
  );
}

export default authGuard(ProfilePage);
