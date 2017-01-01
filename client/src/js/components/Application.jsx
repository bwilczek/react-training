import React from 'react'

import NavigationBar from './NavigationBar'

import '../../scss/application.scss'

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
