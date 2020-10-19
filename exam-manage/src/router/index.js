import React from "react";
import RouterMap from "./map";
import Routes from "./routes";

class RouterView extends React.Component {
  render() {
    const { routes } = this.props;
    const mapRoutes = routes ? routes : Routes
    return <RouterMap routes={mapRoutes} />
  }
}
export default RouterView;