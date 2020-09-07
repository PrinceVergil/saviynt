import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chart from "../Table_layout/Stock_chart";
import Grid from "@material-ui/core/Grid";
import * as GrIcons from "react-icons/gr";

const useStyles = makeStyles({
  table: {
    width: 1000,
    padding: 0,
  },
});
function GetColor(val) {
  console.log("ss", val);
  if (parseFloat(val.gcolor.replace(/\s*\(.*?\)\s*/g, "")) < 0) {
    return <label style={{ color: "#f30606" }}>{val.gcolor}</label>;
  } else {
    return <label style={{ color: "#0fff1a" }}>{val.gcolor}</label>;
  }
}
export function Table_component(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="caption table small"
        fixedHeader={false}
        style={{ width: "auto", height: "auto", tableLayout: "auto" }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" width="10%">
              Company
            </TableCell>
            <TableCell align="left" width="10%">
              Market
            </TableCell>
            <TableCell align="left" width="10%">
              Watchlist
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.DataList.map((row) => (
            <TableRow key={row.Company_Name}>
              <TableCell align="left" width="20%" height="10%">
                <Grid container spacing={2}>
                  <Grid item sm={3}>
                    {row.Company_Name}
                  </Grid>
                  <Grid item sm={2}>
                    <div style={{ height: "100px" }}>
                      <Chart
                        ChartData={row.LineChartData}
                        rate={row.MarketPrice[1].rate}
                      />
                    </div>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="left" width="10%">
                <label>{row.MarketPrice[0].price}</label>
                <br></br>
                <GetColor gcolor={row.MarketPrice[1].rate} />
              </TableCell>
              <TableCell align="left" width="10%">
                <GrIcons.GrAddCircle />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Table_component;
