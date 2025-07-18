import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,source,author,date}=this.props

    return (
    <div className="card" >
       <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '85%',zIndex:'1'}}>{source}</span>
        <img src={imageUrl?imageUrl:"https://cdn.mos.cms.futurecdn.net/QBoPmz2NStbrpriSAnTC7N.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.length>45? title.slice(0,45)+"...":title}</h5>
            <p className="card-text">{description.length>88? description.slice(0,88)+"...":description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>

            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
    </div>
    )
  }
}

export default NewsItem