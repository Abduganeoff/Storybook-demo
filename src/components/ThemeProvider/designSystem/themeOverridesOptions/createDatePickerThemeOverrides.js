export const createDatePickerThemeOverrides = ({
  primaryPalette,
  spacing,
  elevation,
  palette,
}) => ({
  MuiPickersCalendarHeader: {
    root: {
      color: palette.background.paper,
      marginTop: 0,
      marginBottom: 0,
      paddingLeft: spacing[4],
      paddingRight: spacing[2],
      backgroundColor: primaryPalette.main,
      paddingTop: spacing[4],
      paddingBottom: spacing[4],
      maxHeight: 47,
      minHeight: 47,
    },
    switchViewDropdown: {
      color: palette.text.primary,
    },
    monthTitleContainer: {
      '& h6': {
        marginTop: spacing[2],
      },
    },
  },
  MuiPickersArrowSwitcher: {
    iconButton: {
      backgroundColor: primaryPalette.main,
      color: palette.background.paper,
    },
  },
  MuiPickersBasePicker: {
    pickerView: {
      width: 316,
      borderRadius: '5px',
    },
  },
  MuiPickersDay: {
    root: {
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      '&:disabled': {
        color: palette.text.disabled,
      },
    },
    dayWithMargin: {
      margin: '0 2.5px',
    },
  },
  MuiPickersCalendar: {
    root: {
      minHeight: '240px',
    },
    weekDayLabel: {
      color: palette.text.secondary,
      fontSize: 10,
      margin: '22px 2.5px 0',
    },
  },
  MuiPickersYearSelection: {
    root: {
      margin: 0,
      backgroundColor: palette.background.paper,
    },
  },
  MuiPickersYear: {
    yearButton: {
      '&:disabled': {
        color: palette.text.disabled,
      },
    },
  },
  MuiPickersPopper: {
    paper: {
      boxShadow: elevation[3],
    },
  },
});
