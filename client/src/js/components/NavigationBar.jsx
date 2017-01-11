import React from 'react'
import { Link } from 'react-router'

export default class NavigationBar extends React.Component {

  render() {
    return (
      <div>
        <Link to='/'>Home</Link> |&nbsp;
        <Link to='accumulator'>Accumulator</Link> |&nbsp;
        <Link to='todos'>ToDos</Link> |&nbsp;
        <Link to='briefing'>Briefing</Link> |&nbsp;
        <Link to='series'>Number series</Link>
        <hr />
      </div>
    );
  }
}
