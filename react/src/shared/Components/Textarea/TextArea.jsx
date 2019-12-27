import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const { rows,
    cols,
    id,
    name,
    label,
    placeholder,
    handleChange,
    disabled,
    maxlength,
    value } = props;

  return (
    <div className='form-group'>
      <label for={id}>{label}:</label>
      <textarea className='form-control'
        rows={rows}
        cols={cols}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {handleChange(e)}}
        disabled={disabled}
        maxLength={maxlength}
        value={value}/>
    </div>
  );
}

TextArea.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  maxlength: PropTypes.number,
}

export default TextArea;