// src/components/Button/Button.jsx
import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomButton = ({ text, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

CustomButton.defaultProps = {
  size: "medium",
  color: "primary",
  circular: false,
  icon: false,
  disabled: false,
};

CustomButton.propTypes = {
  /**
   * @ignore testId
   */
  dataTestId: PropTypes.string,
  /** ignore  */
  children: PropTypes.node,
  /** String, size of the button */
  size: PropTypes.oneOf(["medium", "small"]),
  /** String, theme of the button */
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "error"]),
  /** Classes accepted by the component */
  classes: PropTypes.shape({
    root: PropTypes.string,
    circular: PropTypes.string,
    small: PropTypes.string,
    icon: PropTypes.string,
    iconSmall: PropTypes.string,
    disableElevation: PropTypes.string,
    onlyIcon: PropTypes.string,
  }),
  /** If the button is circular */
  circular: PropTypes.bool,
  /** If the button is an icon button   */
  icon: PropTypes.bool,
  /** If the button is disabled or not */
  disabled: PropTypes.bool,
  /** onClick handler for button */
  onClick: PropTypes.func,
  /** If the button is full width */
  fullWidth: PropTypes.bool,
};

CustomButton.displayName = "Button";

export default CustomButton;
