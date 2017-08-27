import Color from 'color';
import colors from '../../../styles/colors';

function buttonStyle({ textColor = colors.trueWhite, backgroundColor = colors.darkBlueGray } = {}) {
  const boxShadowColor = Color(backgroundColor).darken(0.4).rgbString();
  const borderColor = Color(backgroundColor).darken(0.2).rgbString();
  return {
    background: backgroundColor,
    color: textColor,
    boxShadow: `0px 2px 1px ${boxShadowColor}`,
    ':focus': {
      outline: 'none'
    },
    ':hover': {
      position: 'relative',
      top: 2,
      boxShadow: `0px 1px 1px ${boxShadowColor}`,
    },
    ':active': {
      position: 'relative',
      top: 3,
      boxShadow: 'none',
      borderTop: 1,
      borderStyle: 'solid',
      borderColor
    }
  };
}

export default {
  inner: {
    borderStyle: 'none',
    outline: 'none',
    borderRadius: 3,
    top: 0,
    height: 40,
    padding: '10px 25px',
    fontSize: '15px',
  },
  default: {
    ...buttonStyle()
  },
  primary: {
    ...buttonStyle({ backgroundColor: colors.aquamarine })
  },
  success: {
    ...buttonStyle({ backgroundColor: colors.green })
  },
  info: {
    ...buttonStyle({ backgroundColor: colors.strongBlue })
  },
  warning: {
    ...buttonStyle({ backgroundColor: colors.yellow })
  },
  danger: {
    ...buttonStyle({ backgroundColor: colors.red })
  },
  link: {
    ...buttonStyle({ backgroundColor: 'transparent' })
  },
};
