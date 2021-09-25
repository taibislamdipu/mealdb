import React from 'react';
import './SingleMeal.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SingleMeal = (props) => {

    // console.log('meal', props.meal);

    const image = props.meal.hasOwnProperty('strMealThumb') ? props.meal.strMealThumb : null;
    const name = props.meal.hasOwnProperty('strMeal') ? props.meal.strMeal : null;
    const strCategory = props.meal.hasOwnProperty('strCategory') ? props.meal.strCategory : null;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="single-meal-container">
            <img className="meal-image" src={image} alt="" />
            <h3>{name}</h3>
            <p>
                <small>{strCategory}</small>
            </p>
            <button className="btn btn-success" onClick={() => handleAddToCart(name)}>
                <FontAwesomeIcon icon={faPlus} />   Add To Cart
            </button>
        </div>
    );
};

export default SingleMeal;