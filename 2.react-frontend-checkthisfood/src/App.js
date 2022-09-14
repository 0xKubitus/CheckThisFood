import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import SignUp from './pages/Sign/SignUp';
import Login from './pages/Sign/Login';
import LoggedOut from './pages/Sign/LoggedOut';
import NewRecipe from './components/NewRecipe';
import "./App.css";


function App() {
  return (
    
    <div className='App'>
    <Sidebar/>
    <Routes>
      
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LoggedOut />} />
        <Route path="/recette" element={<NewRecipe />} />
        {/* <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/property/:id" element={<Property />} /> */}

                {/* routes we need to protect */}

                {/* <Route path="admin" element={<Admin />} /> */}

    </Routes>
    
    </div>
    );
}

export default App;
