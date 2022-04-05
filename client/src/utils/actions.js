// actions.js - defining how three parts of our state will be maintained and updated

export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// is used by the ProductList component
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// works a lot like UPDATE_PRODUCTS in that we want to take the list of categorees retrieved from the server by Apollo and store it in this global state
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
// sort of connecting the piece of data for the previous 2 actions created, to be able to select a category from the state created by the UPDATE_CATEGORIES action and display products for that category from the list we create from the UPDATE_PRODUCTS action