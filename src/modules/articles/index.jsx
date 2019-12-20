import React from 'react'
import './index.scss'
import Tour from "../tours/Tour";
import Article from "./article";
import {ARTICLES} from "../../data";

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/articles');
    const articles = await response.json();

    this.setState({
      articles: articles
    })
  }

  render() {
    return(
      <div className='interesting'>
        <h1>Интересные статьи</h1>

        <div className='interesting-container'>
          {ARTICLES.map((article, index) => {
              return (
                <Article
                        key={`article -${index}`}
                        article={article}/>
              )
          })}
          </div>
        </div>
    );
  }
}

export default Articles;

