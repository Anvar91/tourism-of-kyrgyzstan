import React from 'react';
import './index.scss';
import {withRouter} from 'react-router-dom';

class SingleArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null
    }
  }

  async componentDidMount() {
    const articleId = this.props.match.params.articleId;
    const response = await fetch(`http://localhost:3000/tours/${articleId}`)
    const article = await response.json()

    this.setState({
      article
    })
  }

  render() {
    if (!this.state.article) {
      return null;
    }

    return (
      <div className='single-tour'>
        <h1>{this.state.article.name}</h1>
        <img src={this.state.article.image}/>

        <div className='description'>
          <p>{this.state.article.description}</p>
        </div>

        <img src={this.state.article.additionalImages[0]}/>
        <div className='description'>
          <p>{this.state.article.longDescription}</p>
        </div>

      </div>
    )
  }
}



export default withRouter(SingleArticle);