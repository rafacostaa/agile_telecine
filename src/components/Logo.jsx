import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  imageIcon: {
    height: '100px',
    backgroundColor: 'black',
  },
  iconRoot: {
    textAlign: 'center',
  },
});

const Logo = () => {
  const classes = useStyles();

  return <img className={classes.imageIcon} src="/assets/icons/logo-telecine.svg" />;
};

export default Logo;
