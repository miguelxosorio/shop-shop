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

    cart: [
        {
            _id: '1',
            name: 'Soup',
            purchaseQuantity: 1
        },
        {
            _id: '2',
            name: 'Bread',
            purchaseQuantity: 2
        }
    ],
    cartOpen: false
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

// cart tests
test('ADD_TO_CART', () => {
    // a reducer should treate the original state as immutable
    // test should verify that the initialState was not affected by the update
    let newState = reducer(initialState, {
        type: ADD_TO_CART,
        product: { purchaseQuantity: 1}
    });

    expect(newState.cart.length).toBe(3);

    expect(initialState.cart.length).toBe(2);
})

test('ADD_MULTIPLE_TO_CART', () => {
    let newState = reducer(initialState, {
        type: ADD_MULTIPLE_TO_CART,
        products: [{},{}]
    });

    expect(newState.cart.length).toBe(4);

    expect(initialState.cart.length).toBe(2);
});

// This test will remove both cart items from initialState, one after the other.
test('REMOVE_FROM_CART', () => {
    let newState1 = reducer(initialState, {
        type: REMOVE_FROM_CART,
        _id: '1'
    });

    // cart is still open
    expect(newState1.cartOpen).toBe(true)

    // 2nd item should now be the 1st
    expect(newState1.cart.length).toBe(1);

    expect(newState1.cart[0]._id).toBe('2');

    let newState2 = reducer(newState1, {
        type: REMOVE_FROM_CART,
        _id: '2'
    });

    // cart is empty and closed
    expect(newState2.cartOpen).toBe(false);

    expect(newState2.cart.length).toBe(0);

    expect(initialState.cart.length).toBe(2);
});