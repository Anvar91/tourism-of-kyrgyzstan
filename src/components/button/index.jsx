import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button ({color, disabled, onClick, children}) {
  const btnClass = classNames(
    'btn1',
    color,
    {disabled}
  );

  return(
    <button
      className={btnClass}
      onClick={onClick}
      >{children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;