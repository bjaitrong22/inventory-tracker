import React from 'react';
import PropTypes from 'prop-types';

export default function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Name of beans"
          required="required"
        />
        <input
          type='text'
          name='origin'
          placeholder='Beans place of origin'
          required="required"
        />
        <input
        type='text'
        name='price'
        placeholder='Price per lbs'
        required="required"
        />
        <input
        type='text'
        name='roast'
        placeholder="light,medium, or dark"
        required="required"
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}