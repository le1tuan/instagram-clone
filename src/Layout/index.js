import Header from '../Header';
import React from 'react';
import {Fragment} from "react";

class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
      </Fragment>
    )
  }
}

export default Layout;