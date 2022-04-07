import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';

// The Home page component keeps track of the current category we are viewing.

const Home = () => {
  // const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      <CategoryMenu /> 
      {/* <CategoryMenu setCategory={setCategory} /> */}
      <ProductList />
      {/* <ProductList currentCategory={currentCategory} /> */}
      <Cart />
    </div>
  );
};

export default Home;

// Home.js manages the state that's updated by the CategoryMenu component and used by the ProductList component
// The Home Page component manages teh state currentCategory, which is passed to the ProductList component as a prop and instructs which category's products should be retrieved using Apollo.
// To set that currentCategory value, however, the setCategory callback function is passed to the CategoryMenu component as a prop to be executed on a new category pick