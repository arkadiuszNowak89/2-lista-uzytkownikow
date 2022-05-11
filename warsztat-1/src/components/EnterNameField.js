import React, { useState } from 'react';
import './EnterNameField.css';

function EnterNameField(props) {
  let inputEl;

  return (
    <form
      className='enterNameField'
      onSubmit={(e) => {
        props.addToList(e, inputEl);
      }}
    >
      <input
        type='text'
        ref={(el) => (inputEl = el)}
        placeholder='Enter name'
        maxLength='20'
      />
      <button type='submit'>Add user</button>
    </form>
  );
}

export default EnterNameField;
