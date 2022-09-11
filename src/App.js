import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Footer from "./components/Footer";
import SeasonsMenu from "./components/SeasonsMenu";
import useData from "./utils/useData";
import Icons from "./components/Icons";

const useStyles = makeStyles({
  containerTitle: {
    backgroundColor: "rgba(50,50,50,0.7)",
    padding: "10px 20px",
    color: "#F5F5F5",
  },
  title: {
    fontFamily: "Nunito",
  },
  sessionMenu: {
    height: "600px",
  },
  paperContainer: {
    backgroundImage: ({ image }) => `url('${image}')`,
    backgroundSize: "cover",
    height: "100vh",
  },
});

export default function App() {
  const {
    tvShows: { Title, Images, Cast, Synopsis },
    episodes,
  } = useData();

  const image = Images && Images.Background;

  const classes = useStyles({ image });

  return (
    <>
      <Paper className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={12} className={classes.containerTitle}>
            <Typography variant="h2" className={classes.title}>
              {Title}
            </Typography>
            <Icons nameIcon="Subtitle" />
          </Grid>
          <Grid item xs={12} className={classes.sessionMenu}>
            <SeasonsMenu episodes={episodes} />
          </Grid>
          <Grid item xs={12}>
            <Footer tvShows={{ Cast, Synopsis }} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
