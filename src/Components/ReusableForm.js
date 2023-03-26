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
          required
        />
        <input
          type='text'
          name='origin'
          placeholder='Beans place of origin'
          required
        />
        <input
        type='text'
        name='price'
        placeholder='Price per lbs'
        />
        <input
        type='text'
        name='roast'
        placeholder="light,medium, or dark"
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