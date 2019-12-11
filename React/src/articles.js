import './styles.css'
import defaultdata from './defaultdata'
import lodash from 'lodash'
import ReactHtmlParser from 'react-html-parser';
import { Icon } from 'antd'
import 'antd/dist/antd.css'
import HomeHeader from './HomeHeader'
import PostHeader from './PostHeader'
import { render, Button } from 'react-dom'
import { Grid, Slug, Fade } from 'mauerwerk'
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function readKey(file) {
  var fs = require('fs');
  try {
    var string = fs.readFileSync(file, 'utf8');
    return string;
  } catch (e) {
    console.log('Error:', e.stack);
  }
}

const Cell = ({ toggle, title, article, maximized }) => (
  <div
    className="cell"
    style={{ backgroundImage: 'linear-gradient(-225deg, #FFFEFF 0%, #E5F0FF 100%)', cursor: !maximized ? 'pointer' : 'auto' }}
    onClick={!maximized ? toggle : undefined}>
    <Fade show={maximized} delay={maximized ? 400 : 0}>
      <div className="details">
        <Slug delay={600}>
          <div className="close">
            <Icon type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
          </div>
          <h1>{title}</h1>
          <p>{ReactHtmlParser(article)}</p>
        </Slug>
      </div>
    </Fade>
    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
      enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
      leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
      delay={maximized ? 0 : 400}>
      <div className="title">{title}</div>
      <p>
        <div className="content">{ReactHtmlParser(article)}</div>
      </p>
    </Fade>
  </div>
)

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://r8btapgiw9.execute-api.us-east-1.amazonaws.com/latest/get')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  state = { defaultdata, columns: 2, margin: 70, filter: '', height: true }
  search = e => this.setState({ filter: e.target.value })
  shuffle = () => this.setState(state => ({ data: lodash.shuffle(state.data) }))
  setColumns = e => this.setState({ columns: parseInt(e.key) })
  setMargin = e => this.setState({ margin: parseInt(e.key) })
  setHeight = e => this.setState({ height: e })

  render() {
    var { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className='center'><img src="loading.gif" class="center"></img></div>;
    } else {
      isLoaded = false;
      return (
        <div className="main">
          <Grid
            className="grid"
            // Arbitrary data, should contain keys, possibly heights, etc.
            data={articles}
            // Key accessor, instructs grid on how to get individual keys from the data set
            keys={d => d.id}
            // Can be a fixed value or an individual data accessor
            heights={this.state.height ? d => d.height : 400}
            // Number of columns
            columns={this.state.columns}
            // Space between elements
            margin={20}
            // Removes the possibility to scroll away from a maximized element
            lockScroll={true}
            // Delay when active elements (blown up) are minimized again
            closeDelay={400}>
            {(data, maximized, toggle) => (
              <Cell {...data} maximized={maximized} toggle={toggle} />
            )}
          </Grid>
        </div>
      )
    }
  }
}

export default HomeScreen
