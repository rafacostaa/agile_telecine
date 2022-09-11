import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import Icons from './Icons';

const useStyles = makeStyles({
  container: {
    alignSelf: 'center',
  },
  cardIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: "rgba(35,35,35)",
  },
  cardContainer:{
    boxShadow: 'none',
  },
  cardContent:{
    backgroundColor: "rgba(35,35,35)",
    color: '#F5F5F5',
    boxShadow: 'none',
    paddingTop: '10px',
  }
});

export default function CardCast(props) {
  const { sinopse } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={4} className={classes.container}>
        <Card className={classes.cardContainer}>
          <CardContent className={classes.cardIcons}>
            <Icons nameIcon="Add" title="Mi Lista" />
            <Icons nameIcon="Evaluate" title="Evaluar" />
            <Icons nameIcon="Rec" title="Grabar" />
            <Icons nameIcon="Share" title="Compartir" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Card className={classes.cardContent}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" component="h2">
              SINOPSE
            </Typography>
            <Typography variant="body2" color="inherit" component="p">
              {sinopse}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
