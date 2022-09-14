import { useState } from 'react';

const SearchFoodData = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchFoodSubmit = (e) => {
        e.preventDefault();

        alert(`your input : ${searchInput}`);
    };

    return (
        <div className="search-food-data">
            <form onSubmit={handleSearchFoodSubmit}>
                <label>Rechercher les apports d'un aliment :</label>
                <input
                    type="text"
                    value={searchInput}
                    name="search-food-data-input"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button>Rechercher</button>
            </form>
        </div>
    );
};

export default SearchFoodData;
