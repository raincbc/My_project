
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home' ,      
    }
    console.log(this.state)
  }


  handleClick = (event) => {
    event.preventDefault()
    const value = event.target.name

    this.setState({ currentPage: this.state.currentPage = value })
    console.log(this.state)
  }

  renderSwitch() {
    switch(this.state) {
      case 'home':
        return <Home />;
      
      case 'news':
        return <News />;

      
      case 'callBack':
        return <CallBack />;

      case 'contacts':
        return <Contacts />;      
      
      default:
        return  <Home />;
    }
  }

  

  render() {
    return (
      <div>
        <ul>
          <li>
            <a name = 'home' onClick={this.handleClick}>
              Home
            </a>
          </li>
          <li>
            <a name = 'news' onClick={this.handleClick}>
              News
            </a>
          </li>
          <li>
            <a name = 'callback' onClick={this.handleClick}>
              CallBack
            </a>
          </li>
          <li>
            <a name = 'contacts' onClick={this.handleClick}>
              Contacts
            </a>
          </li>
        </ul>
        <div id='container'>{this.renderSwitch()}</div>
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
