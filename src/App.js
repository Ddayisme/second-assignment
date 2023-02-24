import "./App.css";
import LogInPage from "./components/pages/login-page";
import TranslationPage from "./components/pages/translation-page";
import ProfilePage from "./components/pages/profile-page";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

/**
 * I don't know if I am "conventionally" allowed to to this, but it is only here for Style reasons
 * And since we are not graded on styling I hope it is fine that it is all here and not in components.
 * Because if we didn't do styling this file would only be the BrowserRouting, we just didn't know how to
 * cleannly get in style classes outside of here.
 */
function App() {
  return (
    <div className="App">
      <header>
        <h4>Lost in Translation</h4>
      </header>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/translations">Translations</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
        <main>
          <section className="topHalf">
            <div className="banner">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "Images/LostInTranslation_Resources/Logo-Hello.png"
                  }
                  alt="logo"
                  width="100px"
                />
              </div>
              <div>
                <h2>Lost in Translation</h2>
                <h3>Get started</h3>
              </div>
            </div>
          </section>
          <section>
            <div className="pageContent">
              <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="/translations" element={<TranslationPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </div>
          </section>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
