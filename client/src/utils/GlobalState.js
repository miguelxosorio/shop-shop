// import from react
import React, { createContext, useContext } from "react";
// createContext will be used to instantiate a new Context object. - using it to create the container to hold our global state data and functionality
// useContext is another React Hook that will allow us to use the state created from teh createContext function

// product reducer from reducers.js
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;
// when we run the createContext() function, it creates a new Context object.
// every context object comes with 2 components, a Provider and Consumer
// Provider is a special type of React component that we wrap our application in so it can make the state data that's passed into it as a prop
// Consumer is our means of grabbing and using the data that the Provider holds for us

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    // use this to confirm it works
    console.log(state)
    return <Provider value={[state, dispatch]} {...props} />;
};
// StoreProvider instantiate our initial global state with the useProductReducer() function,
// because that wraps it around the useReducer() Hook from React, every time we run this useProductReducer() func, we receive the ff items in return
// state - most up to date version of our global state object
// dispatch - method we execute to update our state, specifically looking for an action object passed in as its argument

// After the useProductReducer() completes and provides us with the new state and function to update state (e.g., dispatch), we then return the StoreContext's <Provider> component with our state object and dispatch the function provided as data for the value prop.

// custom React Hook
const useStoreContext = () => {
    return useContext(StoreContext);
};
// When we execute this function from within a component, we will receive the [state, dispatch] data our StoreProvider provider manages for us
// This means that any component that has access to our StoreProvider component can use any data in our global state container or update it using the dispatch function

export { StoreProvider, useStoreContext };
// we can use our useStoreContext() function to grab the state from the <StoreProvider> component and use the returning dispatch method to update it