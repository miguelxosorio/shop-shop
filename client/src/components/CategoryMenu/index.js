import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';


// The CategoryMenu component keeps track of our category list from an Apollo query.

function CategoryMenu() {

  // we'll query our category data, store it into the global state object, and then use the category data from the global state object to use it in the UI
  const [state, dispatch] = useStoreContext();

  const { categories } = state;
  
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

useEffect(() => {
    
    // if categoryData exists or has changed from the response of useQuerry, then run dispatch()
    if(categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
    }
  }, [categoryData, dispatch]);
  // when this component loads and the response from the useQuery() Hook returns,
  // the useEffect() Hook notices that categoryData is not undefined anymore and runs the dispatch() function, setting our category data to the global state

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            // setCategory(item._id);
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
