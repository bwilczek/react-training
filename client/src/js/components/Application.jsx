import React from 'react'

import '../../css/font-awesome.min.css'
import '../../css/bootstrap.min.css'

import '../../css/application.scss'

import NavigationBar from './NavigationBar'
import AlertBox from './AlertBox'

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <AlertBox />
        <NavigationBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
