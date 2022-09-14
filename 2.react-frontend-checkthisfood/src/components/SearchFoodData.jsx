// import React from 'react';

const SearchFoodData = () => {
    const handleSearchFoodSubmit = () => {
        console.log('you clicked submit');
    };

    return (
        <div className="search-food-data">
            <form onSubmit={handleSearchFoodSubmit}>
                <label>Recherche les apports d'un aliment :</label>
                <input type="text" name="search-food-data-input" />
            </form>
        </div>
    );
};

export default SearchFoodData;
