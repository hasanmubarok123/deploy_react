import React from "react";
import './Trending.css';

const Trending = props =>{
    return (
        <div className="content">
        <ul>
            <li>
                <a href={props.url}>
                <h6>{props.title}</h6>
                </a>
            </li>
        </ul>
        </div>
    );
}

export default Trending;