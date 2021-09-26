import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Shop.css'
const Shop = () => {
   const [people,setPeople]=useState([]);
    const [cart,setCart]=useState([]);
   useEffect(()=>{
     
    fetch('./richman.JSON')
    
    .then(res=>res.json())
    .then(data=>setPeople(data)
    
     )

},[])
   const handleAddToCart = person =>{
      const newCart=[...cart,person];
      setCart(newCart);
   }
    return (
        <div className='total-part row'>
            <div className="billioniar-part">
                {
                    people.map(person=><Person
                        key={person.key}
                        person={person}
                        handleAddToCart={handleAddToCart}
                        ></Person>)
                }
            </div>
            <div className="cart-part">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;