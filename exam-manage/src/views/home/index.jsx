import React, { Component } from 'react'
import RouterView from '@/router/index.js';
import { inject, observer } from 'mobx-react';


@inject('user')
@observer
class Home extends Component {
  render() {
    const { routes } = this.props;
    const { userToken,test } = this.props.user;
    return (
      <div>
        this is home pgae
        <h1>{test}</h1> <button onClick={() => this.props.user.updateToken()}>点我</button>
        <RouterView routes={routes}></RouterView>
      </div>
    )
  }
}
export default Home;