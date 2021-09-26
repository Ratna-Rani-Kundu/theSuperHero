import React from 'react';
import './Cart.css'
const Cart = (props) => {
     const { cart }= props;
     let total = 0;
   for(const person of cart){
      total = total + parseFloat(person.Wealth);
      }
    
    return (
        <div>
            <h4>
                Cart
            </h4>
            <p>Amount of person :{props.cart.length}</p>
            <p>{props.cart.name}</p>
          
            <h6>Total: {total}</h6>
        </div>
    );
};

export default Cart;