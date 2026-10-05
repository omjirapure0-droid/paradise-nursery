import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h1>Paradise Nursery</h1>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      <main className="shopping-cart">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <a href="/plants" className="continue-shopping">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-thumbnail"
                  />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p>Unit Price: ${item.price.toFixed(2)}</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => handleDecrease(item)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </div>

                    <p>
                      Total Cost: $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>
                Total Cart Amount: ${totalAmount.toFixed(2)}
              </h3>

              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <a
                href="/plants"
                className="continue-shopping"
              >
                Continue Shopping
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;