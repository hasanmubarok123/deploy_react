import React from "react";
import './Navbar.css';
// import logo from "../logo.svg";

// const logoWrapper = {
//   display: "block",
//   width: "100px",
//   float: "left"
// };

const Navbar = props => {
  return (
    // <nav id="topnav">
      /* <div style={logoWrapper}>
        <img src={logo} className="App-logo" alt="logo" />
      </div> */
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img width="50px" src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/2/26/Drawn-wings-transparent-14.png/revision/latest?cb=20180311160159"/>Hasan news</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Video</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Entertainment</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div className="in">  
        <a href="#">
        <span className="log-sign">log in</span>
        </a>
        <a href="#">
        <span className="log-sign">sign in</span>
        </a>
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;
