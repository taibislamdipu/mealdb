import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meal.css';

const Meal = () => {

    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    const [filteredMeal, setFilteredMeal] = useState([]);

    useEffect(() => {
        async function callApi() {



            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`);
            response = await response.json();
            setMeals(response.meals);

            setFilteredMeal(response.meals);

        }
        callApi();
    }, [])

    const handleAddToCart = (meal) => {
        const newCart = [...cart, meal];
        setCart(newCart);
    }

    const handleSearch = event => {
        const searchText = (event.target.value);

        const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));

        setFilteredMeal(matchedMeals);

        console.log(matchedMeals.length);
    }

    return (
        <div>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="Search Meal..." />
            </div>

            <div className="meal-container">
                <div className="meals-container">

                    {
                        filteredMeal.map(meal => <SingleMeal
                            key={meal.idMeal}
                            meal={meal}
                            handleAddToCart={handleAddToCart}
                        >
                        </SingleMeal>)
                    }
                </div>

                <div className="cart-container">
                    <h3>Meal Added: {cart.length}</h3>
                    {
                        cart.map(cart => <Cart cart={cart}></Cart>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Meal;