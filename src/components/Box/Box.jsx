import * as React from "react";
import * as PropTypes from "prop-types";
import MuiBox from "@mui/material/Box";

const Box = React.forwardRef((props, ref) => {
  const { dataTestId, ...other } = props;
  // Ref type missing workaround in MuiBox https://github.com/mui-org/material-ui/issues/17010
  return <MuiBox data-testid={dataTestId} {...other} {...{ ref: ref }} />;
});

Box.displayName = "Box";

Box.defaultProps = {
  component: "div",
};

Box.propTypes = {
  /**
   * @ignore testId
   */
  dataTestId: PropTypes.string,
  /** Box render function or node */
  children: PropTypes.node,
  /** The component used for the root node. Either a string to use a DOM element or a component. */
  component: PropTypes.any,
};

export default Box;
