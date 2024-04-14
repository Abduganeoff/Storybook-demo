// src/components/Button/__stories__/Button.story.jsx
import React from "react";
import CustomButton from "../Button";
import ExtendedPreview from "../../../custom/ExtendedPreview";

export default {
  title: "Components/Button",
  component: CustomButton,
};

export const Primary = ({ color, iconPosition, circular, ...other }) => (
  <CustomButton color={color} circular={circular} {...other} />
);

Primary.storyName = "Default";
Primary.args = {
  text: "Button",
  iconPosition: null,
};
Primary.argTypes = {
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
  text: {
    type: "string",
  },
  fullWidth: {
    type: "boolean",
  },
};
Primary.parameters = {
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


