import './styles.css'
import 'antd/dist/antd.css'
import React, { Component, Fragment } from 'react'
import { Button, Icon, Input, Dropdown, Menu } from 'antd'

function readKey(file) {
	var fs = require('fs');
	try {
		var string = fs.readFileSync(file, 'utf8');
		return string;
	} catch(e) {
	console.log('Error:', e.stack);
	}
}

const inputParsers = {
  date(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class PostScreen extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      article: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleArticleChange = this.handleArticleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
   
    fetch('https://lhk56kti7b.execute-api.us-east-1.amazonaws.com/latest/post', {
      method: 'POST',
      body: JSON.stringify({"title": this.state.title, "article": this.state.article}),
      headers: {'Content-Type': 'application/json'}
      })
      .then(response => {
        console.log(response);
        if (response.ok) { 
          const { history } = this.props;
          history.push("/articles");
        }

    });
    
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
}

handleArticleChange = (e) => {
    this.setState({article: e.target.value});
}

  render() {
    return (
      <form id="paper" onSubmit={this.handleSubmit}>
        <p>
        Article title
        <input
          name="title"
          type="text"
          data-parse="uppercase"
          onChange={this.handleTitleChange}
        />
        </p>
        <p>
      
        <textarea placeholder="Enter your article text." id="text" name="article" rows="4" onChange={this.handleArticleChange}></textarea> 
        </p>


        <Button type="primary" onClick={this.handleSubmit}>
        Add Article
      </Button>
      </form>
    );
  }

}

export default PostScreen