import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import LoggedOut from './pages/LoggedOut';
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
        {/* <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/property/:id" element={<Property />} /> */}

        {/* routes we need to protect */}
        
        {/* <Route path="admin" element={<Admin />} /> */}

        {/* catch all */}

    </Routes>
    
    </div>
    );
}


export default App;
