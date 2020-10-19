import React, { Component } from 'react';
import RouterView from '@/router';

export default class componentName extends Component {
  render() {
    return (
      <div>
        this is detail
        <RouterView routes={this.props.routes}></RouterView>
      </div>
    )
  }
}
