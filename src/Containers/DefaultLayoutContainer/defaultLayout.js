import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./DefaultLayout.css";

import routes from "../../routes";

const DefaultHeader = React.lazy(() => import("./defaultHeader"));

export default function DefaultLayout() {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  return (
    <div className="app">
      <div>
        <Suspense fallback={loading}>
          <DefaultHeader />
        </Suspense>
      </div>
      <div className="app-body">
        <main>
          <Container>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) =>
                        localStorage.getItem("token") !== null ? (
                          <route.component {...props} />
                        ) : (
                          <Redirect from="/" to="/login" />
                        )
                      }
                    />
                  ) : null;
                })}
              </Switch>
            </Suspense>
          </Container>
        </main>
      </div>
    </div>
  );
}
