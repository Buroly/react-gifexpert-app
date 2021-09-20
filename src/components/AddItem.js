import React     from 'react';
import PropTypes from 'prop-types';

let index = 1;

export const AddItem = ({items, setItems, placeholder}) => {
  const prefix = `add-item-${index}`;

  const onChange = (e) => {
    const value  = e.target.value;
    const button = document.querySelector(`#${prefix}-button`);
    
    if (value) {
      if (items? items.indexOf(value) === -1: true) {
        button.disabled = false;
      }
      else {
        button.disabled = true;
      }
    }
    else {
      button.disabled = true;
    }
  };
  const onKeyUp  = (e) => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const input = document.querySelector(`#${prefix}-input`);
    const value = input.value;

    if (value && items? items.indexOf(value) === -1: true) {
      const button = document.querySelector(`#${prefix}-button`);

      if (setItems) {
        setItems(items => [value, ...items]);
      }
      
      input.value = '';
      button.disabled = true;
    }
  };

  window.addEventListener('DOMContentLoaded', (e) => {
    const button = document.querySelector(`#${prefix}-button`);
    button.disabled = true;
  });

  index++;

  return (
    <form className="add-item"
          onSubmit={onSubmit}>
      <input  id={`${prefix}-input`}
              placeholder={placeholder}
              onChange={onChange}
              onKeyUp={onKeyUp} />
      <button id={`${prefix}-button`}
              type="submit">Agregar</button>
    </form>
  );
};
AddItem.propTypes = {
  setItems:    PropTypes.func.isRequired,
  items:       PropTypes.array,
  placeholder: PropTypes.string
};
AddItem.defaultProps = {
  items:        null,
  placeholder: 'Escribe un nuevo elemento'
};
