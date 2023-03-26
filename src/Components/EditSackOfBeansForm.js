import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

export default function EditSackOfBeansForm (props) {
  const {sackOfBeans} = props;

  function handleEditSackOfBeansFormSubmision(event) {
    event.preventDefault();
    props.onEditSackOfBeans({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      quantity: sackOfBeans.quantity,
      id: sackOfBeans.id
    }); 
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditSackOfBeansFormSubmision}
        buttonText="Update Ticket" />
    </>
  );
}

EditSackOfBeansForm.propTypes = {
  sackOfBeans: PropTypes.object,
  onEditSackOfBeans: PropTypes.func
}