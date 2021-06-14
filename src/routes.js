import React from "react";
const Events = React.lazy(() => import("./Containers/EventsContainer"));

const routes = [
  {
    path: "/",
    exact: true
  },

  {
    path: "/events/",
    name: "Events",
    component: Events
  },
  {
    path: "/",
    name: "Events",
    component: Events
  }
];

export default routes;
