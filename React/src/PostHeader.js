import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Icon, Input, Dropdown, Menu, Switch } from 'antd'
import { NavLink } from "react-router-dom";

export default function ({ }) {
  return (
    <div className="header">
      <div className="menu">
        <Link to="/"> <Button type="primary">
          Read Articles
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
