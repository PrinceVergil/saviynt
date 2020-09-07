import React from "react";
import Gridlist_card from "../Gridlist/GridList_card";
import Table_layout from "../Table_layout/Table_component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Topganner_List from "../Data_Json/Dashboard_Top_ganner.json";
import Toplosser_List from "../Data_Json/Dashboard_Top_losser.json";
import List_topbyMarketCapital from "../Data_Json/Dashboard_Top_MarketCapital.json";
function Dashboard() {
  return (
    <div className="Dashboard">
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Typography variant="h6" gutterBottom>
                Top Gainer:
              </Typography>
              <Gridlist_card loadList={Topganner_List} />
            </Grid>
            <Grid item sm={12}>
              <Typography variant="h6" gutterBottom>
                Top Losser:
              </Typography>
              <Gridlist_card loadList={Toplosser_List} />
            </Grid>
            <Grid item sm={9}>
              <Typography variant="h6" gutterBottom>
                Top by Market Capital:
              </Typography>
              <Table_layout DataList={List_topbyMarketCapital} />
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default Dashboard;
