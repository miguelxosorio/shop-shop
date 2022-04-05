// A reducer is a function that updates state by returning a new state object and never alters the original state object.

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        // if action type value is the value of 'UPDATE_CATEGORIES', return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        // 
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

        // if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
};
// adding this code to the reducers.js file imports the possible actions we can perform and creates a function called reducer()
// when the function executes, we pass the value of the action.type argument into a switch statement and compare it to our possible actions eg. UPDATE_PRODUCTS
// if it's the action type, we return a new object with a copy of the state argument using the spread ... operator and then set the products key to a value of a new array with the action.products value spread across it
// if it's not the action type, we make no change to state and return it as is