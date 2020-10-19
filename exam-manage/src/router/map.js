import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouterMap extends React.Component {
  render() {
    const { routes } = this.props;
    const defaultRoute = <Route key={1} exact path="/" component={() =>
      <Redirect to="/home" />
    } />;
    return <Switch>
      {
        routes.map((itm, ind) => {
          if (!itm.component) return false;
          return <Route key={ind} path={itm.path} render={(config) => {
            const Comp = itm.component;
            const Children = itm.children === undefined ? [] : itm.children;
            return <Comp routes={Children} {...config}></Comp>
          }}></Route>
        }).concat([defaultRoute])
      }
    </Switch>
  }
}
export default RouterMap;