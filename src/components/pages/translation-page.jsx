import authGuard from "../../hoc/authGuard";
import TranslationView from "../translation-view";

function TranslationPage() {
  return (
    <>
      <TranslationView />
    </>
  );
}

export default authGuard(TranslationPage);
