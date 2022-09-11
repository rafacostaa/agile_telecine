import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    display: 'inline-flex',
    padding: '30px 40px',
    margin: '5px',
    backgroundColor: '#333333',
  },
  typographyColor:{
    color: '#fff',
  },
});

export default function CardCast(props) {
  const classes = useStyles();
  
  const { cast } = props;
  return (
    <>
    {cast.map((item, key) => (
      <Card key={key} className={classes.root}>
          <Typography variant="h6" align="center" className={classes.typographyColor}>
            {item.Name}
          </Typography>
      </Card>
    ))}
    </>
  );
}
