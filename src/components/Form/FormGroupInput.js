import React from 'react';

const FormGroupInput = ({ name, label, onchange, type, value }) => {
  return (
    <div>
      <label htmlFor="value">{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={e => onchange(e)}
        required
      />
    </div>
  );
};

export default FormGroupInput;
