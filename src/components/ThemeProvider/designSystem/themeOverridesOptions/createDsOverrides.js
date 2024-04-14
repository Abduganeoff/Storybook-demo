export const createDsOverrides = ({ primaryPalette, spacing, palette }) => ({
  MuiCssBaseline: {
    '@global': {
      body: {
        lineHeight: 1,
      },
    },
  },
  /* Used in buttons size="small" the SVG icon font should be 1rem */
  MuiSvgIcon: {
    fontSizeSmall: {
      fontSize: '1rem',
    },
  },

  MuiTableBody: {
    root: {
      '& [class^="MuiButton"]': {
        color: palette.text.primary,
      },
      '& .Mui-disabled, & [class*="MuiCheckbox-root"]': {
        color: palette.text.disabled,
      },
    },
  },

  // This overrides the disabled buttons of Pagination
  // to be visible in Dark Mode
  MuiTablePagination: {
    toolbar: {
      '& .Mui-disabled': {
        color: palette.text.disabled,
      },
    },
  },

  // this style override the table header for all material ui tables
  // that is used inside material-table
  MuiTableSortLabel: {
    root: {
      '&:focus': {
        color: palette.text.primary,
      },
      '&:hover': {
        color: palette.text.primary,
        '& $icon': {
          color: palette.text.primary,
          opacity: 1,
        },
      },
      '&$active': {
        color: primaryPalette.main,
        '&& $icon': {
          color: primaryPalette.main,
        },
      },
    },
    active: {},
  },
  MuiTableCell: {
    head: {
      borderBottomWidth: 2,
    },
    root: {
      borderBottom: `1px solid ${palette.neutral[2]}`,
    },
  },
  MuiTableRow: {
    root: {
      cursor: 'default !important',
    },
    hover: {
      '&:hover': {
        cursor: 'auto !important',
      },
    },
  },
  MuiPickersClock: {
    amButton: {
      width: spacing[7],
      height: spacing[7],
    },
    pmButton: {
      width: spacing[7],
      height: spacing[7],
    },
  },
  MuiAutocomplete: {
    option: {
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent',
      },
      '&:hover': {
        backgroundColor: palette.secondary.main,
      },
    },
  },
});
