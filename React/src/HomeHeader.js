import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Icon, Input, Dropdown, Menu, Switch } from 'antd'
import { NavLink } from "react-router-dom";

function nagivate() {
  this.props.navigation.navigate('/post')
}

export default function ({ }) {
  return (
    <div className="header">
      <div className="menu">
        <Link to="/post"> <Button type="primary">
          Add Article
      </Button></Link>
      </div>

      <Router>
        <NavLink exact activeClassName="home" to="/post">
          <Link to="/post">
          </Link>
        </NavLink>
      </Router>

      <div className="express-times"><h1>The Express Times</h1></div>

    </div>
  )
}
