import React from 'react'
import { Link } from 'react-router'

export default class NavigationBar extends React.Component {

  render() {
    return (
      <div>
        <Link to='/'>Home</Link> | <Link to='accumulator'>Accumulator</Link> | <Link to='todos'>ToDos</Link>
      </div>
    );
  }
}
