import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Box from '@material-ui/core/Box';
import CardCast from './CardCast';
import Sinopse from './Sinopse';
import Icons from './Icons';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    height: '220px',
    backgroundColor: "rgba(35,35,35)",
  },
  tabs:{
    borderBottom: '1px solid rgba(245,245,245,0.2)',
  },
});

export default function Footer(props) {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const { tvShows:{Cast, Synopsis} } = props;
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box zIndex="tooltip"
        bgcolor="transparent"
        height={50}
        position="absolute"
        right="1%"
        bottom="19%"
        >
        <Icons nameIcon="Telecine" />
      </Box>
      <Box zIndex="modal" flexGrow={1}>
        <TabContext value={value}>
          <AppBar position="fixed" className={classes.appBar}>
            <TabList 
              onChange={handleChange} 
              aria-label="simple tabs example" 
              indicatorColor="primary" 
              className={classes.tabs}
            >
              <Tab label="GENERAL" value="1" />
              <Tab label="ELENCO" value="2" />
              <Tab label="PRINCIPAIS PRÊMIOS" value="3" />
            </TabList>
            <TabPanel value="1">
              <Sinopse sinopse={Synopsis} />
            </TabPanel>
            <TabPanel value="2">
              <CardCast cast={Cast}/>
            </TabPanel>
            <TabPanel value="3">PRINCIPAIS PRÊMIOS</TabPanel>
          </AppBar>
        </TabContext>
      </Box>
    </>
  );
}
