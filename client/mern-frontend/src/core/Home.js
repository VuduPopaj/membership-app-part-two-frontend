import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
// ili:
//import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
//import Typography from "@material-ui/core/Typography";

import mistral from "./../assets/images/mistral.jpg";

const styles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
  credit: {
    padding: 10,
    textAlign: "right",
    backgroundColor: "#ededed",
    borderBottom: "1px solid #d0d0d0",
    "& a": {
      color: "#3f4771",
    },
  },
}));

const Home = () => {
  const classes = styles();

  return (
    <div>
      <Card className={classes.card}>
        <Typography variant="h4" className={classes.title}>
          Home Page
        </Typography>
        <CardMedia
          className={classes.media}
          image={mistral}
          title="Mistral on the Top"
        />
        <Typography
          variant="body2"
          components="p"
          className={classes.credit}
          color="textSecondary"
        >
          Photo by <b>dron.ba</b>
        </Typography>
        <CardContent>
          <Typography variant="body1" component="p">
            Welcome to the Membership Home Page
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
