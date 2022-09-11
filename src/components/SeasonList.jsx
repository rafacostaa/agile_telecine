import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionActions';
import Icons from './Icons';

const useStyles = makeStyles({
  root:{
    backgroundColor: 'transparent',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#F5F5F5',
    backgroundColor: 'transparent',
  },
  media: {
    height: '200px',
  },
  accordionDetails:{
    backgroundColor: 'transparent',
  },
  card:{
    border: "none",
    boxShadow: "none",
    backgroundColor: 'transparent',
    color:'#F5F5F5',
  },
});

export default function SeasonList(props) {
  const { data } = props;
  
  const [expanded, setExpanded] = useState(0);
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  const classes = useStyles();
  
  return (
    <>
    {data.map((item, key)=>(
      <Accordion expanded={expanded === key}
        key={key} 
        onChange={handleChange(key)}
        className={classes.root}
       >
        <div className={classes.container}>
          <AccordionSummary aria-controls={`panel${key}d-content`} id={`panel${key}d-header`}>
            <Typography>{`${item.EpisodeNumber} ${item.Title}`}</Typography>
          </AccordionSummary>
          <Icons nameIcon="Play" />
        </div>
        <AccordionDetails className={classes.accordionDetails}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={item.Image}
              title={item.Title}
            />
            <CardContent>
              <Typography>
                {item.Synopsis}
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    ))} 
    </>
  );
}