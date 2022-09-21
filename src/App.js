import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SignUp from './pages/Sign/SignUp';
import Login from './pages/Sign/Login';
import LoggedOut from './pages/Sign/LoggedOut';
import NewRecipe from './components/NewRecipe';
import "./App.css";
import SingleRecipe from './components/SingleRecipe';


function App() {
  return (
    
    <div className='App'>
      
    <Sidebar/>

    <div className='main'>
    <Navbar/>

    <Routes>
      
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LoggedOut />} />
        <Route path="/recette" element={<NewRecipe />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        {/* <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/property/:id" element={<Property />} /> */}

                {/* routes we need to protect */}

                {/* <Route path="admin" element={<Admin />} /> */}

    </Routes>
    </div>
    </div>
    );
}

export default App;
