import { useSelector } from "react-redux";

/**
 * This is an attempt at making it so that if someone refreshes the site
 * it will log them out because Redux is lost on refreshes.
 * We tried to make it do a new fetch and append that to Redux, but didn't have time to make it work.
 */
export function AutoLogout() {
  const translationHistory = useSelector(
    (state) => state.translationHistory.translationsArray
  );
  if (translationHistory.length === 0) {
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
  }
}
