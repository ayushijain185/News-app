import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    let {title,description,imageUrl,newsUrl, author , date} = this.props;
    return (
      <div>
        <div className="card text-left my-3 mx-4" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm  btn-dark btn-primary">Read More</a>
                </div>
                <div className="card-footer text-body-secondary">
                   <small>By {author==null?"Unknown" : author} on {new Date(date).toGMTString()}</small>
                </div>
                
        </div>
      </div>
    )
  }
}
