import React from "react";
import PropTypes from "prop-types";
import { Story, Canvas } from "@storybook/blocks";
import { Typography, Box, Link, Tooltip, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import NotesIcon from "@mui/icons-material/Notes";
import ReplyIcon from "@mui/icons-material/Reply";
import BugReportIcon from "@mui/icons-material/BugReport";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const ExtendedPreview = ({ storyId, sourceLink, muiLink, exampleLink }) => (
  <Box>
    <Typography variant="h5">Preview</Typography>
    <Canvas>
      <Story id={storyId} />
    </Canvas>
    <Box
      display="flex"
      justifyContent="flex-end"
      style={{ marginTop: "-36px" }}
    >
      {sourceLink && (
        <Tooltip title="View source on GitHub">
          <IconButton
            component={Link}
            href={sourceLink}
            target="_blank"
            color="primary"
            disabled={!sourceLink}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      )}
      {muiLink && (
        <Tooltip title="View MUI component">
          <IconButton
            component={Link}
            href={muiLink}
            target="_blank"
            color="primary"
          >
            <ReplyIcon />
          </IconButton>
        </Tooltip>
      )}

      {exampleLink && (
        <Tooltip title="Show code in CodeSandbox">
          <IconButton
            component={Link}
            href={exampleLink}
            target="_blank"
            color="primary"
          >
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title="Send feedback">
        <IconButton color="primary">
          <FeedbackIcon />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
);

ExtendedPreview.propTypes = {
  storyId: PropTypes.string.isRequired,
  sourceLink: PropTypes.string,
  muiLink: PropTypes.string,
};

export default ExtendedPreview;
