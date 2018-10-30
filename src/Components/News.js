import React from "react";
import './News.css';

const News = props =>{
    return (
    // <div class="col-sm-6 mt-3">
        <div class="card m-3" style={{width: "40rem"}}>
        <img class="card-img-top" height="400px"src={props.img} alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <a href={props.url} class="btn btn-primary">News</a>
        </div>
        <div className="icon-card container">
            <div className="row">
                <div className="col-md-4 icon">
                <i class="fas fa-heart"></i>
                </div>
                <div className="col-md-4 icon">
                <i class="far fa-comment-alt"></i>
                </div>
                <div className="col-md-4 icon">
                <i class="fas fa-share-alt"></i>
                </div>
            </div>
        </div>
        </div>
    // {/* </div> */}
    );
};


// News.propTypes = {
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     img: PropTypes.string
//   };
  

export default News;