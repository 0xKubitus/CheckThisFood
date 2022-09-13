import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import LoggedOut from './pages/LoggedOut';


function App() {
  return (
    <>
    <Navbar/>
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
    </>
    );
}


export default App;
