import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_TYPE = 'text';
const DEFAULT_PLACEHOLDER = '...';

const Input = (props) => {
  const { id,
    name,
    type,
    handleChange,
    placeholder,
    label,
    disabled,
    value } = props;

  return (
    <div className='from-group'>
      <label htmlFor={id}>{label}</label>
      <input className='form-control'
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        onChange={(e) => handleChange(e)}
        disabled={disabled}
        value={value} />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
}

Input.defaultProps = {
  type: DEFAULT_TYPE,
  placeholder: DEFAULT_PLACEHOLDER,
  disabled: false,
  value: '',
}

export default Input;