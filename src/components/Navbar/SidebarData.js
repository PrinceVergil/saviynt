import React from "react";

import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillDashboard />,
    cName: "nav-text",
  },
  {
    title: "Investments",
    path: "./Investments",
    icon: <AiIcons.AiFillMoneyCollect />,
    cName: "nav-text",
  },
  {
    title: "Watchlist",
    path: "./Watchlist",
    icon: <GiIcons.GiAngryEyes />,
    cName: "nav-text",
  },
];
