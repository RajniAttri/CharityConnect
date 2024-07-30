import React from "react";

/**
 * A custom button
 * @param {*} props The props
 * @returns
 */
function Button(props) {
  const icon = props.icon;
  const text = props.text;
  const type = props.type;

  /**
   * type = 'primary-button' | 'secondary-button'
   */

  return (
    <button className={type}>
      {text}
      {icon}
    </button>
  );
}

export default Button;
