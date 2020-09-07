import React from "react";
import GridList from "@material-ui/core/GridList";
import Card from "../Stock_Cards";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));
const GridList_card = (props) => {
  const classes = useStyles();
  return (
    <GridList className={classes.gridList} cols={2.5}>
      {props.loadList.map((n) => {
        return (
          <Card
            imgsrc={n.image_url}
            title={n.title}
            price={n.price}
            rate={n.rate}
          />
        );
      })}
    </GridList>
  );
};

export default GridList_card;
