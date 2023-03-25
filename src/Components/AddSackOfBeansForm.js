import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

export default function AddSackOfBeans(props) {
  function handleAddSackOfBeansFormSubmission(event) {
    event.preventDefault();
    props.onAddSackOfBeansCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      quantity: 130,
      id: v4()
    }); 
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleAddSackOfBeansFormSubmission}
        buttonText="Add To Inventory"/>
    </>
  );
}

AddSackOfBeans.propTypes = {
  onAddSackOfBeansCreation: PropTypes.func
};