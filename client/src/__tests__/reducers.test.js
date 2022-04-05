// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};

// With this test, we look to create a new state object. - to update products
test('UPDATE_PRODUCTS', () => {
    // this newState object will be the result of what comes from the reducer() function
    // accepts 2 parameters, 1. the current state object - so we can make a copy of it for the new state
    // 2. the action we're performing to update state, type: (type of action we're performing) and value: (name representative of the new data we want to use with the action)
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{},{}]
    });
    // In this case, we pass in the current state held in initialState and then our action, indicating that we want to update our products list with the contesnts held in the products array

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});