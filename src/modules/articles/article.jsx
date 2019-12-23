import React from 'react';
import './article.scss';

class Article extends React.Component {

  render() {
    const {image, name, description, subName} = this.props.article;

    return(
      <div className='article'>
        <div className='text'>
          <span>{name}</span>
        </div>

        <div className='image'>
          <img src={image}/>
          <p>{subName}</p>
        </div>

        <div className='desc'>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Article;