import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

// This component currently gets all of its data as props passed down from Cart
// CartItem will also update the global state to adjust item quantities
const CartItem = ({ item }) => {
  // we only destructured the dispatch() function from the useStoreContext Hook, because the CartItem component has no need to read state
  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };

  // Anytime an <input> element's value changes, an onChange event will occur
  // capture that event and send the element's new value to the reducer
  const onChange = e => {
    const value = e.target.value;

    // if the user changes the quantity to zero, we should simply delete the item from the cart with the REMOVE_FROM_CART action
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
      idbPromise('cart', 'delete', { ...item });

    // Otherwise, we'll call the UPDATE_CART_QUANTITY action
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });

      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input type="number" placeholder="1" value={item.purchaseQuantity} onChange={onChange} />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
