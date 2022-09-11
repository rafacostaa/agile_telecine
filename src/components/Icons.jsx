import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Typography } from '@material-ui/core';
import { pathIcons } from '../utils/getIcon';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    textAlign: 'center',
  },
  typographyColor:{
    color: '#fff' 
  }
});

const Icons = (props) => {
  const classes = useStyles();
  const { nameIcon, title } = props;
  const findIcon = pathIcons.find((item) => item.name === nameIcon);
  const { iconPath, alt } = findIcon;

  return (
    <div className={classes.root}>
      <IconButton>
        <img alt={alt} src={iconPath} />
      </IconButton>
      <Typography className={classes.typographyColor}>{title}</Typography>
    </div>
  );
};

export default Icons;
