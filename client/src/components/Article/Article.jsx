import React, {Component} from 'react';
import ReactHTMLParser from 'react-html-parser';

import socket from '../../services/socketService';
import './Article.css';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      html: '<div>Loaded article will go here</div>'
    };
  }
  componentWillMount() {
    socket.on('articleUpdate', update => {
      this.setState({html: update.html})
    });
  }
  updateArticle(text) {
    this.setState({text});
  }
  render() {
    return (
      <div className='article'>
        <div className='article-body'>{ReactHTMLParser(this.state.html)}</div>
      </div>
    );
  }
}

export default Article;