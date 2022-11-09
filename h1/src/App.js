
import React from 'react';
import './App.css';

const container = document.getElementById('container')

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home' ,      
    }
  }

  changeState = (data) => {
    const value = data.target.name

    this.setState({ currentPage: this.state.currentPage = value })
  }
  

  render() {
    return (
      <div>
        <ul>
          <li>
            <a name = 'home' onClick={this.changeState} >
              Home
            </a>
          </li>
          <li>
            <a name = 'news' onClick={this.changeState}>
              News
            </a>
          </li>
          <li>
            <a name = 'callback' onClick={this.changeState}>
              CallBack
            </a>
          </li>
          <li>
            <a name = 'contacts' onClick={this.changeState}>
              Contacts
            </a>
          </li>
        </ul>
        <div id='container'></div>
      </div>      
    )
  }
};



class Home extends React.Component { 
  constructor() {
    super()
    this.text = 'Home Page'
  }
  render() {
    return <div>{this.text}</div>
    console.log(this)
  }

}






class News extends React.Component { 
  render() {
    return <a>News</a>
  }
}

class CallBack extends React.Component { 
  render() {
    return <a>CallBack</a>
  }
}

class Contacts extends React.Component { 
  render() {
    return <a>Contacts</a>
  }
}







export default App;
