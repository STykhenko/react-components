import colors from '../../styles/colors';
import text from '../../styles/text';

export default isMobile => ({
  singleValue: provided => ({
    ...provided,
    fontFamily: text.fontPrimary,
    fontSize: isMobile ? '1.6rem' : '1.3rem',
  }),

  placeholder: provided => ({
    ...provided,
    fontFamily: text.fontPrimary,
    fontSize: isMobile ? '1.6rem' : '1.3rem',
    color: 'inherit',
    margin: '0 3px',
  }),

  menu: provided => ({
    ...provided,
    borderRadius: '3px',
    marginTop: '-2px',
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: 'none',
    border: `1px solid ${colors.blueDarkest}`,
    borderTop: 'none',
    zIndex: 'unset',
  }),

  control: (provided, { isFocused, selectProps: { isDisabled } }) => {
    const common = {
      cursor: 'pointer',
      boxShadow: 'none',
      transition: 'none',
      minHeight: isMobile ? '49px' : 'initial',
    };

    const hover = {
      ...common,
      borderColor: colors.blueDarkest,
      color: colors.blueDarker,
      fill: colors.blueDarker,
    };

    const regular = {
      ...common,
      border: `1px solid ${colors.slateDarker}`,
      borderRadius: '3px',
      color: colors.slateDarkest,
      fill: colors.slateDarkest,
    };

    const disabled = {
      ...regular,
      color: colors.slateLighter,
      fill: colors.slateLighter,
      borderColor: `${colors.slateLighter} !important`,
      backgroundColor: colors.white,
    };

    let final = regular;
    if (isDisabled) {
      final = disabled;
    } else if (isFocused) {
      final = hover;
    }

    return {
      ...provided,
      ...final,
      '&:hover': hover,
    };
  },

  menuList: provided => ({
    ...provided,
    padding: 0,
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
  }),

  option: (provided, { isFocused }) => {
    const regular = {
      cursor: 'pointer',
      backgroundColor: colors.white,
      color: colors.slateDarkest,
      fontFamily: text.fontPrimary,
      fontSize: isMobile ? '1.6rem' : '1.3rem',
      padding: isMobile ? '13px 10px' : '9px 11px',
    };

    const hover = {
      ...regular,
      backgroundColor: colors.slateLightest,
      color: colors.blueDarker,
    };

    return {
      ...provided,
      ...(isFocused ? hover : regular),
      '&:hover': hover,
      '&:active': {
        backgroundColor: colors.slateLightest,
        color: colors.blueDarker,
      },
    };
  },

  dropdownIndicator: provided => ({
    ...provided,
    padding: '8px 9px',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '9px 8px',
  }),
});