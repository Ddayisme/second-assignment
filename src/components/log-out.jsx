import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTranslations } from "../state/translationsSlice";

/**
 * This one is only making a Logout button. It could be appended to more pages (like the translate page)
 * which is why it is a component, however we ended up only adding it to the Profile page as it made most sense there.
 */
function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function clearStorage() {
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    dispatch(removeTranslations());
    navigate("/");
  }
  return <button onClick={clearStorage}>Logout</button>;
}

export default LogOut;
