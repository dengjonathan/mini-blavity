import React, {Component} from 'react';
import ReactHTMLParser from 'react-html-parser';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      html: '<div>dummy text2</div>'
    };
  }
  updateArticle(text) {
    this.setState({text})
  }
  render() {
    return (
      <div className='article'>
        <h2>Main Article</h2>
        <div className='article-body'>{ReactHTMLParser(this.state.html)}</div>
      </div>
    );
  }
}

export default Article;