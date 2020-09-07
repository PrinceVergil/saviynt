import React, { createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Investments from "./components/Pages/Investments";
import Watchlist from "./components/Pages/Watchlist";
import "./App.css";
// import CardDemo from "./components/Simple_card";
// import CardList from "./components/Card_horizontal_list";
// const cardData = {
//   url:
//     "https://english.mathrubhumi.com/polopoly_fs/1.4591968.1583561158!/image/image.JPG_gen/derivatives/landscape_894_577/image.JPG",
//   title: "katrina",
//   price: "100",
//   rate: "10",
// };
// const Data = createContext();
// function App() {
//   return (
//     <>
//       <Data.Provider value={cardData}>
//         <CardDemo />
//       </Data.Provider>
//       <CardList />
//     </>
//   );
// }
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Investments" component={Investments} />
          <Route path="/Watchlist" component={Watchlist} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
// export { Data };
