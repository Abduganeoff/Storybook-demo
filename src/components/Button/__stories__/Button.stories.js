import React from "react";
import CustomButton from "../Button";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CircularProgress from "@mui/material/CircularProgress";

const renderIcon = (icon, color) => {
  const isLight = color === "secondary" || color === "tertiary";
  switch (icon) {
    case "Save":
      return <SaveIcon />;
    case "Edit":
      return <EditIcon />;
    case "Loading":
      return (
        <CircularProgress size={24} color={isLight ? "primary" : "secondary"} />
      );
    default:
      return null;
  }
};

export default {
  title: "Components/Button",
  component: CustomButton,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "tertiary", "error"],
      control: { type: "select" },
    },
    iconSample: {
      options: [null, "Save", "Edit", "Loading"],
      control: { type: "select" },
    },
    iconPosition: {
      options: [null, "start", "end"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    circular: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    text: {
      control: { type: "text" },
    },
  },
};

export const Default = ({
  color,
  iconPosition,
  circular,
  iconSample,
  ...other
}) => {
  const icon = renderIcon(iconSample, color);
  return (
    <CustomButton
      color={color}
      circular={circular}
      startIcon={iconPosition === "start" ? icon : null}
      endIcon={iconPosition === "end" ? icon : null}
      {...other}
    >
      {other.text}
    </CustomButton>
  );
};

Default.storyName = "Default";
Default.args = {
  text: "Button",
  iconSample: null,
  iconPosition: null,
};
Default.argTypes = {
  size: {
    options: ["small", "medium"],
    control: {
      type: "radio",
    },
  },
  iconSample: {
    options: [null, "Save", "Edit", "Loading"],
    control: {
      type: "select",
    },
  },
  iconPosition: {
    options: [null, "start", "end"],
    control: {
      type: "radio",
    },
  },
  color: {
    options: ["primary", "secondary", "tertiary", "error"],
    control: {
      type: "select",
    },
  },
  disabled: {
    type: "boolean",
  },
  circular: {
    type: "boolean",
  },
  children: {
    type: "string",
  },
  fullWidth: {
    type: "boolean",
  },
};
Default.parameters = {
  controls: {
    sort: "alpha",
    include: [
      "size",
      "disabled",
      "children",
      "fullWidth",
      "color",
      "circular",
      "iconPosition",
      "iconSample",
    ],
  },
};

export const IconButton = ({ color, circular, iconSample, ...other }) => {
  const icon = renderIcon(iconSample, color);
  return (
    <CustomButton
      color={color}
      circular={circular}
      icon={icon} 
      {...other}
    >
      {renderIcon(iconSample, color)}
    </CustomButton>
  );
};

IconButton.storyName = "Icon";
IconButton.args = {
  iconSample: "Save",
  color: "secondary",
};
IconButton.argTypes = {
  size: {
    options: ["small", "medium"],
    control: { type: "radio" },
  },
  iconSample: {
    options: ["Save", "Edit", "Loading"],
    control: { type: "select" },
  },
  color: {
    options: ["primary", "secondary", "tertiary", "error"],
    control: { type: "select" },
  },
  disabled: {
    type: "boolean",
  },
  circular: {
    type: "boolean",
  },
};
IconButton.parameters = {
  controls: {
    sort: "alpha",
    include: ["size", "disabled", "color", "circular", "iconSample"],
  },
};
