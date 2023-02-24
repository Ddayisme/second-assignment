import { useSelector } from "react-redux";
import { AutoLogout } from "../utils/autoLogout";
import LogOut from "./log-out";

/**
 * This component prints out the translation history of the currently logged in user.
 * It does this by taking the Redux state and maps it out.
 */
function ProfileView() {
  AutoLogout();

  const translationHistory = useSelector((state) => state.translationHistory);
  const user = localStorage.getItem("username");

  let allTranslationArray = translationHistory.translationsArray.map(
    (translation, index) => <div key={index}>{translation.payload}</div>
  );

  return (
    <div className="history">
      <h5>Translation History</h5>
      <p>
        <i>For user {user}</i>
      </p>
      {allTranslationArray}
      <LogOut></LogOut>
    </div>
  );
}

export default ProfileView;
