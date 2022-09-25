import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from 'components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SignUp from './pages/Sign/SignUp';
import Login from './pages/Sign/Login';
import LoggedOut from './pages/Sign/LoggedOut';
import NewRecipe from './components/Recipe/NewRecipe';
import './App.css';
import SingleRecipe from './components/Recipe/SingleRecipe';
import SearchFoodData from 'components/Recipe/SearchFoodData';
import SearchRecipe from 'components/Recipe/searchRecipe';
import Breakfast from 'pages/Breakfasts/Breakfasts';
import Meals from 'pages/Meals/Meals';
import Snacks from 'pages/Snacks/Snacks';
import AllRecipes from 'pages/AllRecipes/AllRecipes';

function App() {
    return (
        <div className="App">
            <Sidebar />

            <div className="main">
                <Navbar />

                <Routes>
                    {/* public routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<LoggedOut />} />
                    <Route path="/recette" element={<NewRecipe />} />
                    <Route path="/recipes/:id" element={<SingleRecipe />} />
                    <Route path="/search_food_data" element={<SearchFoodData />} />
                    <Route path="/search_recipe" element={<SearchRecipe />} />
                    <Route path="/breakfast" element={<Breakfast />} />
                    <Route path="/meal" element={<Meals />} />
                    <Route path="/snack" element={<Snacks />} />
                    <Route path="/all_recipes" element={<AllRecipes />} />

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
