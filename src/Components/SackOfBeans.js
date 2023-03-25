import React from 'react';
import PropTypes from 'prop-types';

export default function SackOfBeans(props) {
  return(
    <>
      <div onClick = {() => props.whenSackOfBeansClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>Origin: {props.origin}</p>
        <p>Price: {props.price}</p>
        <p>Roast: {props.roast}</p>
        <hr />
      </div>
    </>
  );
}

SackOfBeans.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenSackOfBeansClicked:PropTypes.func
};