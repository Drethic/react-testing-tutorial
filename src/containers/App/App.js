import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import logo from '../../assets/images/logo.svg';
import './App.css';

class App extends Component {
  state = {
    posts: {}
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => this.setState({ posts: res.data }));
  }

  render() {
    let postContent = null;
    const { posts } = this.state;
    if (!_.isEmpty(posts)) {
      postContent = (
        <ul>
          {posts.map(post => <li key={post.id}>{post.body}</li>)}
        </ul>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {postContent}
      </div>
    );
  }
}

export default App;
