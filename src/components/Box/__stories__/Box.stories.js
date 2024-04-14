import React from "react";
import { Box } from "../Box";

// This default export determines where your story goes in the story list
export default {
  title: "Example/Box",
  component: Box,
};

// We create a “template” of how args map to rendering
const Template = (args) => <Box {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  /* The args you need here will depend on your component */
};
