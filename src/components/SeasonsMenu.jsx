import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import SeasonList from './SeasonList';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    width: '500px',
    marginTop: '200px',
    height: '500px',
    backgroundColor: "rgba(50,50,50,0.7)",
  },
});

export default function SeasonsMenu(props) {
  const { episodes } = props;
  
  const [value, setValue] = useState(1);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const filterSeason = episodes.filter((item)=> { return item.SeasonNumber === value})
  const episodesFilter = episodes.map((item)=>item.SeasonNumber);
  const numberSeason =  episodesFilter.filter((item, index)=>episodesFilter.indexOf(item) === index);
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar className={classes.appBar}>
          <TabList indicatorColor="primary" onChange={handleChange} aria-label="simple tabs">
            {numberSeason.map((item, key)=> 
              <Tab  key={key} label={`T${item}`} value={item} /> 
            )}
          </TabList>
            <TabPanel value={value}>
              <SeasonList data={filterSeason}/>
            </TabPanel>
        </AppBar>
      </TabContext>
    </div>
  );
}

