
import './App.css';
import LogInPage from './components/pages/login-page';
import translationPAge from './components/pages/translation-page'

import {BrowserRouter ,NavLink,Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <p>Test</p>
  
      <NavLink to='/'>Login</NavLink>
    
    <Routes>
      <Route path="/" element={<LogInPage/>}>

      </Route>
    </Routes>
    
    </BrowserRouter> 
    </div>
    
  );
}

export default App;
