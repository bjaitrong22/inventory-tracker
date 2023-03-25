import React from 'react';
import PropTypes from 'prop-types';

export default function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder="Name of Beans"
          required
        />
        <input
          type='text'
          name='origin'
          placeholder='Beans place of origin'
          required
        />
        <input
        type='decimal'
        name='price'
        placeholder='Price per lbs.'
        required
        />
        <input
        type='text'
        name='roast'
        placeholder="light,medium, or dark"
        required
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