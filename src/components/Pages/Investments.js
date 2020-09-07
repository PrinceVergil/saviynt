import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TableList from "../Table_layout/InvestmentTable";
function Investments() {
  return (
    <div className="Investment">
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={3}>
            <h6>My Investment</h6>
            <Grid item sm={12}></Grid>
            <TableList />
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default Investments;
