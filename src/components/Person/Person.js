import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Person = (props) => {
    const {name,age,country,Industry,Wealth,img}=props.person;
    // console.log(props.person)
    return (
        <div className=" container  ">
            <div className=''>
            <div className="card h-100 text-center">
          <img className='w-75 rounded' src={img} alt="" />
         <div className="card-body">
            <h6 className="card-title ">Name:{name}</h6>
             <p className="card-text">Age: {age}
               <br />  Industry:{Industry}
             <br />Country:{country}
             
             <br />Wealth:${Wealth} Billion</p>
         </div>
         <div className="card-footer">
             <button onClick={()=>props.handleAddToCart(props.person)} className='bg-primary text-light'>{cartIcon}Add to Cart</button>
          </div>
       </div>
            </div>
        
       </div>

    );
};

export default Person;