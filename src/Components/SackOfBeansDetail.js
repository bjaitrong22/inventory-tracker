import React from 'react';
import PropTypes from 'prop-types';
import './../beanDetail.css';

export default function SackOfBeansDetail(props) {
  const {sackOfBeans}= props;
  return (
    <>
      <div id="beanDetail">
        <h1>Sack Of Beans Detail</h1>
        <h3>Name: {sackOfBeans.name}</h3>
        <h3>Origin: {sackOfBeans.origin}</h3>
        <h3>Price: ${sackOfBeans.price} per lbs</h3>
        <h3>Roast: {sackOfBeans.roast}</h3>
        <h3>Quantity: {sackOfBeans.quantity} lbs</h3>
        <button onClick={() => props.onClickingSale(sackOfBeans) }>Sell 1 lbs</button>
        <button onClick={ props.onClickingEdit }>Update This Inventory</button>
        <hr />
      </div>    
    </>
  ); 
}

SackOfBeansDetail.propTypes = {
  sackOfBeans: PropTypes.object,
  onClickingSale: PropTypes.func,
  onClickingEdit: PropTypes.func
}