import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_CLASSNAME = 'btn btn-primary';

const Button = (props) => {
  const {
    disabled,
    onClick,
    label,
    name,
    className,
    type,
  } = props;

  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
      name={name}
      type={type}>
      {label}
    </button>
  );
}

Button.propTYpes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  className: DEFAULT_CLASSNAME,
  disabled: false,
}

export default Button;