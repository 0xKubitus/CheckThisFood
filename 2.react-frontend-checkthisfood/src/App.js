import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
        {/* public routes */}


        {/* routes we need to protect */}
        <Route path="/" element={<Home />} />
        {/* <Route path="admin" element={<Admin />} /> */}

        {/* catch all */}

    </Routes>
    </>
    );
}


export default App;
