import React from 'react'
import { object } from 'prop-types'
import injectSheet from 'react-jss'

const styles = theme => ({
  svg: {
    width: 200,
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.41421
  },
  logoAccent: {
    fill: theme.colors.secondary
  },
  logo: {
    fill: 'white'
  }
})

const Logo = ({ classes }) =>
  <svg className={classes.svg} version='1.1' viewBox='6 30 420 86' xmlns='http://www.w3.org/2000/svg'>
    <g>
      <path d='M59.048,41.752c-17.719,0 -32.048,14.328 -32.048,32.048c0,17.72 14.329,32.048 32.048,32.048c17.72,0 32.049,-14.328 32.049,-32.048c-0.109,-17.72 -14.438,-32.048 -32.049,-32.048Zm4.813,56.768l-4.813,4.703l-4.812,-4.703c-11.595,-2.297 -20.345,-12.469 -20.345,-24.72c0,-12.251 8.75,-22.423 20.345,-24.72l4.812,-4.703l4.813,4.703c11.595,2.297 20.345,12.469 20.345,24.72c0,12.251 -8.75,22.423 -20.345,24.72Z' className={classes.logo} />
      <path d='M59.048,49.299l-9.844,9.406l0,30.19l9.844,9.406l9.735,-9.406l0,-30.19l-9.735,-9.406Z' className={classes.logo} />
      <path d='M59.048,49.299l0,49.002l9.735,-9.406l0,-30.19l-9.735,-9.406Z' className={classes.logoAccent} />
      <path d='M176.414,79.597c-3.829,-1.422 -6.454,-2.516 -7.766,-3.281c-1.313,-0.766 -2.297,-1.532 -2.953,-2.407c-0.657,-0.875 -0.876,-1.859 -0.876,-3.062c0,-1.75 0.766,-3.172 2.407,-4.157c1.641,-0.984 4.047,-1.531 7.219,-1.531c3.61,0 7.657,0.875 12.141,2.734l2.407,-5.469c-4.594,-1.968 -9.298,-2.953 -14.001,-2.953c-5.141,0 -9.188,1.094 -12.141,3.172c-2.954,2.078 -4.376,4.922 -4.376,8.532c0,2.078 0.438,3.719 1.313,5.25c0.875,1.422 2.188,2.735 3.938,3.938c1.75,1.203 4.703,2.516 8.859,4.047c4.376,1.641 7.329,3.172 8.751,4.375c1.531,1.203 2.297,2.735 2.297,4.485c0,2.297 -0.985,4.047 -2.844,5.141c-1.859,1.093 -4.594,1.64 -8.094,1.64c-2.297,0 -4.594,-0.328 -7.11,-0.984c-2.406,-0.656 -4.703,-1.422 -6.891,-2.516l0,6.235c3.282,1.859 7.876,2.844 13.782,2.844c5.579,0 9.844,-1.094 13.016,-3.391c3.063,-2.297 4.594,-5.469 4.594,-9.516c0,-2.953 -0.875,-5.36 -2.734,-7.329c-2.188,-1.969 -5.688,-3.828 -10.938,-5.797Z' className={classes.logo} />
      <rect height='44.408' className={classes.logo} width='6.782' x='201.681' y='60.456' />
      <path d='M393.534,63.518c-2.734,-2.625 -6.781,-3.828 -12.032,-3.828c-3.062,0 -5.797,0.656 -8.313,1.75c-2.515,1.203 -4.375,2.953 -5.797,5.141l-0.328,0l-1.094,-6.125l-5.469,0l0,44.408l6.782,0l0,-23.298c0,-5.797 1.094,-9.954 3.281,-12.469c2.188,-2.516 5.579,-3.719 10.173,-3.719c3.5,0 6.125,0.875 7.766,2.625c1.64,1.75 2.515,4.484 2.515,8.094l0,28.767l6.782,0l0,-28.986c-0.219,-5.688 -1.531,-9.844 -4.266,-12.36Z' className={classes.logo} />
      <g>
        <rect height='44.408' className={classes.logo} width='6.782' x='280.107' y='60.456' />
        <circle cx='283.497' cy='45.689' r='3.828' className={classes.logo} />
      </g>
      <path d='M126.099,59.581c-6.344,0 -12.141,2.515 -16.298,6.672l0,-24.501l-6.891,0l0,63.112l6.891,0l0,-5.688c4.157,4.157 9.954,6.672 16.298,6.672c12.797,0 23.079,-10.391 23.079,-23.079c0,-12.797 -10.282,-23.188 -23.079,-23.188Zm0,39.377c-8.751,0 -15.86,-6.891 -16.298,-15.533l0,-1.64c0.438,-8.641 7.547,-15.532 16.298,-15.532c8.969,0 16.297,7.328 16.297,16.297c0,9.188 -7.328,16.408 -16.297,16.408Z' className={classes.logo} />
      <path d='M259.324,66.362c-4.156,-4.156 -9.953,-6.672 -16.297,-6.672c-12.798,0 -23.08,10.391 -23.08,23.079c0,12.798 10.391,23.079 23.08,23.079c6.344,0 12.141,-2.515 16.297,-6.672l0,5.688l6.891,0l0,-63.112l-6.891,0l0,24.61Zm-16.297,32.596c-8.97,0 -16.298,-7.329 -16.298,-16.298c0,-8.969 7.328,-16.298 16.298,-16.298c8.75,0 15.86,6.891 16.297,15.532l0,1.641c-0.437,8.641 -7.547,15.423 -16.297,15.423Z' className={classes.logo} />
      <path d='M338.516,66.362c-4.157,-4.156 -9.954,-6.672 -16.298,-6.672c-12.797,0 -23.079,10.391 -23.079,23.079c0,12.798 10.391,23.079 23.079,23.079c6.344,0 12.141,-2.515 16.298,-6.672l0,5.688l6.891,0l0,-45.283l-6.891,0l0,6.781Zm-16.298,32.596c-8.969,0 -16.298,-7.329 -16.298,-16.298c0,-8.969 7.329,-16.298 16.298,-16.298c8.75,0 15.86,6.891 16.298,15.532l0,1.641c-0.438,8.641 -7.548,15.423 -16.298,15.423Z' className={classes.logo} />
      <circle cx='204.962' cy='45.689' r='3.828' className={classes.logo} />
    </g></svg>

Logo.propTypes = {
  classes: object
}

export default injectSheet(styles)(Logo)
