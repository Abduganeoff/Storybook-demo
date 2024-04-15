import React from "react";
import Box from "@mui/material/Box";

const Surface = React.forwardRef(
  (
    {
      children,
      elevation = 1,
      square = false,
      outlined = false,
      height,
      backgroundColor = "neutral", 
      ...other
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        sx={{
          height: height,
          backgroundColor: (theme) =>
            theme.palette.grey[backgroundColor] || theme.palette.neutral.base,
          boxShadow: (theme) => theme.shadows[elevation],
          borderRadius: square ? 0 : (theme) => theme.shape.borderRadius,
          border: (theme) =>
            outlined ? `1px solid ${theme.palette.grey[300]}` : "none",
          ...other,
        }}
      >
        {children}
      </Box>
    );
  }
);

export default Surface;
