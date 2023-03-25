import React from 'react';
import SackOfBeans from './SackOfBeans';
import PropTypes from 'prop-types';
import './../beanDetail.css';

export default function BeanList(props) {
  return (
    <>
      <hr />
      <div id="beanDetail">
        {props.beanList.map((sackOfBeans) =>
          <SackOfBeans 
            whenSackOfBeansClicked= { props.onSackOfBeansSelection }
            name={sackOfBeans.name}
            origin={sackOfBeans.origin}
            price={sackOfBeans.price}
            roast={sackOfBeans.roast}
            id={sackOfBeans.id}
            key={sackOfBeans.id}/>      
        )}
     </div>  
    </>
  );
}

BeanList.propTypes = {
  beanList: PropTypes.array,
  onSackOfBeansSelection: PropTypes.func
};