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

        // if it's none of these actions, do not update state at all and keep things the same!
        default:
            return state;
    }
};
// adding this code to the reducers.js file imports the possible actions we can perform and creates a function called reducer()
// when the function executes, we pass the value of the action.type argument into a switch statement and compare it to our possible actions eg. UPDATE_PRODUCTS