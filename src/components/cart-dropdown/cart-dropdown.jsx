import React from "react";

import Button from "../Button/button";

import "./cart-dropdown.styles.scss";

const CartDropdown  = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button> GO TO CHECKOUT </Button>
  </div>
);

export default CartDropdown;
