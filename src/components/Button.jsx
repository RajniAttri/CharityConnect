import React from "react";
import { Link } from "react-router-dom";

/**
 * A custom button
 * @param {*} props The props
 * @returns
 */
function Button(props) {
  const icon = props.icon;
  const text = props.text;
  const type = props.type;
  const href = props.href;

  /**
   * type = 'primary-button' | 'secondary-button'
   */

  return type == "primary-link" || type == "secondary-link" ? (
    <Link className={type} to={href}>
      {text}
      {icon}
    </Link>
  ) : (
    <button className={type}>
      {text}
      {icon}
    </button>
  );
}

export default Button;
