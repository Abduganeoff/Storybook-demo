import React from "react";
import Box from "../Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import mdx from "./Box.mdx";

export default {
  title: "Components/Box",
  component: Box,
  parameters: {
    docs: {
      page: mdx,
    },
    layout: "centered",
  },
};

export const Spacing = ({
  margin,
  padding,
  backgroundColor,
  width,
  height,
  display,
  justifyContent,
  alignItems,
}) => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} sx={{ padding: theme.spacing(4) }}>
      <Grid item xs={12}>
        <Typography variant="h5">Default Box</Typography>
      </Grid>
      <Grid item xs={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: width || "100%",
            height: height || "100px",
            margin: margin || 1,
            padding: padding || 2,
            bgcolor: backgroundColor || theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Typography>This is a Box with flexible styling</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          display={display || "flex"}
          justifyContent={justifyContent || "center"}
          alignItems={alignItems || "center"}
          sx={{
            width: "100%",
            height: "100px",
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            border: "1px solid",
            borderColor: theme.palette.divider,
            p: 2,
          }}
        >
          <Typography>Another Box example</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

Spacing.storyName = "Default";
Spacing.args = {
  margin: 1,
  padding: 1,
  fontWeight: "fontWeightLight",
  position: "flex-start",
  width: "25%",
};
Spacing.argTypes = {
  margin: {
    control: {
      type: "number",
    },
  },
  padding: {
    control: {
      type: "number",
    },
  },
  fontWeight: {
    options: [
      "fontWeightLight",
      "fontWeightRegular",
      "fontWeightMedium",
      "fontWeightBold",
    ],
    control: {
      type: "select",
    },
  },
  position: {
    options: ["flex-start", "center", "flex-end"],
    control: {
      type: "select",
    },
  },
  width: {
    control: {
      type: "text",
    },
  },
};
Spacing.parameters = {
  controls: {
    include: ["margin", "padding", "fontWeight", "position", "width"],
  },
};
