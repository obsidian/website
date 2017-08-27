import React from 'react'
import { ThemeProvider } from 'react-jss'
import { node } from 'prop-types'

const pallete = ['#30264F', '#6A61E2', '#CFCFEA', '#FFFFFF', '#007EA7']

const colors = {
  pallete,
  greyish: pallete[2],
  primary: pallete[0],
  secondary: pallete[1]
}

export const theme = {
  colors,
  content: {
    width: 1080,
    padding: 18
  },
  dark: {
    container: {
      backgroundColor: colors.primary,
      color: 'white'
    },
    'link': {
      '&:link': { color: 'white' },
      '&:visited': { color: 'white' },
      '&:hover': { color: colors.secondary }
    }
  }
}

const ObsidianTheme = ({ children }) => <ThemeProvider theme={theme} children={children} />

ObsidianTheme.propTypes = { children: node }

export default ObsidianTheme
