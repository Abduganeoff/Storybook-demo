import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomButton = ({
  onClick,
  size = "medium",
  color = "primary",
  circular = false,
  startIcon,
  endIcon,
  disabled = false,
  fullWidth = false,
  children,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        borderRadius: circular ? "50%" : 1,
        backgroundColor: (theme) =>
          ({
            primary: theme.palette.primary.main,
            secondary: theme.palette.secondary.main,
            tertiary: theme.palette.grey[500],
            error: theme.palette.error.main,
          })[color],
        color: (theme) =>
          ({
            primary: theme.palette.primary.contrastText,
            secondary: theme.palette.secondary.contrastText,
            tertiary: theme.palette.grey[700],
            error: theme.palette.error.contrastText,
          })[color],
        "&:hover": {
          backgroundColor: (theme) =>
            ({
              primary: theme.palette.primary.dark,
              secondary: theme.palette.secondary.dark,
              tertiary: theme.palette.grey[700],
              error: theme.palette.error.dark,
            })[color],
        },
      }}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["medium", "small"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "error"]),
  circular: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default CustomButton;
