import 'App.css';

const RecipeResult = ({ title, description, carbohydrates, calories, image, id }) => {
    return (
        <div>
            <p>{title}</p>
            <img src={image} alt=""></img>
            <p>Details: {description}</p>
            <p>glucides: {carbohydrates}g</p>
            <p>calories: {calories}kcal</p>
        </div>
    );
};

export default RecipeResult;
