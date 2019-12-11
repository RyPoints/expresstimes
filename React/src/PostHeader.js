import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Button, Icon, Input, Dropdown, Menu, Switch } from 'antd'
import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import PostScreen from "./post"
import HomeScreen from "./articles"
import { NavLink } from "react-router-dom";

// const Navigator = createSwitchNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Post: { screen: PostScreen },
//     // MainTabNavigator: { screen: MainTabNavigator },
   
//   },
//   {
//     initialRouteName: 'Home',
//   }
// )

// const App = createBrowserApp(Navigator);

function nagivate (){
  this.props.navigation.navigate('/post')

}

export default function({
  shuffle,
  search,
  setColumns,
  setMargin,
  setHeight,
  columns,
  margin
}) {
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
