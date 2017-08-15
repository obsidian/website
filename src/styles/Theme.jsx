import React from 'react'
import { ThemeProvider } from 'react-jss'
import { node } from 'prop-types'

const pallete = ['#30264F', '#6A61E2', '#CFCFEA', '#FFFFFF', '#007EA7']

export const theme = {
  greyBg: pallete[2],
  primary: pallete[0],
  secondary: pallete[1],
  textColor: pallete[0],
  headerColor: pallete[0],
  headerText: 'white'
}

const ObsidianTheme = ({ children }) => <ThemeProvider theme={theme} children={children} />

ObsidianTheme.propTypes = { children: node }

export default ObsidianTheme
