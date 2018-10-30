import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import News from './Components/News';
import Trending from './Components/Trending';
import Footer from './Components/Footer';

const apiKey = "d9bf5be2954e41ce8f7b951adf3abc97";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" + "country=sg&" + "apiKey=" + apiKey;
const urlEverything = baseUrl + "everything?" + "q=food&" + "apiKey=" + apiKey;

class App extends Component {
  state = {
    listNews: [],
    trendNews:[]
  //   username: "",
  //   isLogin: false
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response) {
        self.setState({ listNews: response.data.articles });
        // handle success
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    
      axios
      .get(urlEverything)
      .then(function(response) {
        self.setState({ trendNews: response.data.articles });
        // handle success
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    const { listNews,trendNews } = this.state;
    return (
      <div className="App">
      <div className="navigation">
      <Navbar/>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
                {listNews.filter((artikel)=>{ return artikel.urlToImage !== null && artikel.description !== null
                }).map((item, key) => {
                  return <News key={key} title={item.title} img={item.urlToImage} description={item.description} url={item.url} date={item.publishedAt} author={item.author}/>;
                })}
            </div>
            <div className="col-sm-4">
            <h4>Trending Story</h4>
            {trendNews.map((item, key) => {
                  return <Trending key={key} title={item.title} url={item.url} />;
                })}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
