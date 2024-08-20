import React from "react";
import { Link } from "react-router-dom";

/**
 * A custom button
 * @param {*} props The props
 * @returns
 */
function Button({ icon, text, type, href, className, ...props }) {
  /**
   * type = 'primary-button' | 'secondary-button'
   */

  return type == "primary-link" || type == "secondary-link" ? (
    <Link className={`${type} ${className}`} to={href} {...props}>
      {text}
      {icon}
    </Link>
   ): (
    <button className={`${type} ${className}`} {...props}>
      {text}
      {icon}
    </button>
  );
}

export default Button;
