// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from '../utils/actions';

// import the reducer() function
import { reducer } from '../utils/reducers';

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

// test will be used to test how we can update the categories array
// when we execute the reducer() we still pass in the initialState
// execute the UPDATE_CATEGORIES action and update category list to be a new array of categores
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{},{}]
    });

    // The result of the reducer() should show that the length of our updated categories array will be 2, while the initial categories array should still be 1. This indicates that we didn't affect our original state values at all and simply used it to create a new version of it.
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

// updating the state of currentCategory to a new string value instead of an array
// when the test runs, compare values between newState and initialState to confirm that initialState has remained the same
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});