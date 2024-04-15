import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Surface from "../Surface";
import mdx from "./Surface.mdx";

export default {
  title: "Components/Surface",
  component: Surface,
  parameters: {
    docs: {
      page: mdx,
    },
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900], 
      control: { type: "select" },
    },
    square: { control: { type: "boolean" } },
    outlined: { control: { type: "boolean" } },
    width: { control: { type: "number" } },
    height: { control: { type: "number" } },
    elevation: {
      options: [0, 1, 2, 3, 4, 5],
      control: { type: "radio" },
    },
  },
};

export const Default = (args) => {
  return (
    <Grid container spacing={2} sx={{ p: 7 }}>
      <Grid item>
        <Surface
          {...args} 
          sx={{ width: args.width }} 
        >
          <Typography variant="body2">Surface</Typography>
        </Surface>
      </Grid>
    </Grid>
  );
};

Default.args = {
  square: true,
  elevation: 2,
  outlined: true,
  height: 200,
  width: 200,
  backgroundColor: 50, 
};
