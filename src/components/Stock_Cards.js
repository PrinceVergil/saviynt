import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 60,
    width: 60,
    margin: 20,
  },
  CardActionArea_: {
    width: 200,
  },
});

function Stock_Cards(props) {
  const classes = useStyles();
  var color;
  if (parseFloat(props.rate.replace(/\s*\(.*?\)\s*/g, "")) < 0) {
    color = "#f30606";
  } else {
    color = "#0fff1a";
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.CardActionArea_}>
        <CardMedia
          className={classes.media}
          image={props.imgsrc}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {props.price}
          </Typography>

          <Typography variant="body2" style={{ color: color }} component="p">
            {props.rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Stock_Cards;
