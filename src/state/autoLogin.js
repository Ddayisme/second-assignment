import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function AutoLogin() {
  const navigate = useNavigate();

  const translationHistory = useSelector(
    (state) => state.translationHistory.translationsArray
  );
  console.log("this one:", translationHistory);
  if (translationHistory.length === 0) {
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    navigate("/");
  }
}
