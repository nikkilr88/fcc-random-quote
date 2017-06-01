/* global fetch */

import React from 'react';
import QuoteBox from './QuoteBox';
import Buttons from './Buttons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }
  
  componentDidMount() {
    var now = Date.now();
    fetch(this.props.src + now)
      .then(response => {
        return response.json();
      })
      .then(quote => {
        this.setState({
          quote: quote[0].content,
          title: quote[0].title
        });
      });
  }

  getQuote() {
    var now = Date.now();
    fetch(this.props.src + now)
     .then(response => {
        return response.json();
      })
      .then(quote => {
        this.setState({
          quote: quote[0].content,
          title: quote[0].title
        });
      }).then(this.display());
  }

  display() {
    var quote = this.state.quote;
    var author = this.state.title;

    document.getElementById("quoteTxt").innerHTML = quote;
    document.getElementById("author").innerHTML = "— " + author;
  }
  //Change background/ txt color on click
  changeBg() {
    var colors = ["#6ca3fc", "#996cfc", "#fc996c", "#fc6c6c"];
    var randColor = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randColor];
    document.getElementById('btn').style.color = colors[randColor];
    document.getElementById('btnMobile').style.color = colors[randColor];
  }

  //Call both functions together
  onClick() {
    this.getQuote();
    this.changeBg();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <QuoteBox quote={this.state.quote} author={this.state.title} />
        <Buttons onClick={this.onClick} />
      </div>
    );
  }
}
export default App;
