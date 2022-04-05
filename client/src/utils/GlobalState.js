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