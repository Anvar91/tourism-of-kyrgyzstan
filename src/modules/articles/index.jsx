import React from 'react'
import './index.scss'
import Article from "./article";
import {ARTICLES} from "../../data";

class Articles extends React.Component {

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

