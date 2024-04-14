import React from "react";
import { DocsContext } from "@storybook/addon-docs";
import { Source } from "@storybook/components";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function Install({ lab }) {
  return (
    <DocsContext.Consumer>
      {(context) => {
        const { component, subcomponents } = context?.parameters;
        const mainComponent = component?.name || component?.displayName;
        const subComponents = subcomponents ? Object.keys(subcomponents) : [];
        const importStatement = `import { ${[
          mainComponent,
          ...subComponents,
        ].join(", ")} } from "@rds/${lab ? "lab" : "core"}";`;
        return (
          <Box display="block">
            <Typography variant="h6" gutterBottom>
              Import
            </Typography>
            <Source code={importStatement} language="js" dark />
          </Box>
        );
      }}
    </DocsContext.Consumer>
  );
}

Install.defaultProps = {
  lab: false,
};

Install.propTypes = {
  lab: PropTypes.bool,
};

export default Install;
