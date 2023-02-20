
import './App.css';
import LogInPage from './components/pages/login-page';
import TranslationPage from './components/pages/translation-page'
import ProfilePage from './components/pages/profile-page'

import {BrowserRouter ,NavLink,Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <p>Test</p>
      <NavLink to='/'>Login</NavLink>
      <NavLink to='/translations'>Translations</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
    
    <Routes>
      <Route path="/" element={<LogInPage/>}></Route>
      <Route path="/translations" element={<TranslationPage></TranslationPage>}></Route>
      <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
    </Routes>
    
    </BrowserRouter> 
    </div>
    
  );
}

export default App;
