
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    currentPage:'home',
    }

  }

  changeState(data) {
    console.log(data)
    // this.setState({currentPage: this.state.currentPage = data})

  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a onClick={this.changeState('home')}>
              Home
            </a>
          </li>
          <li>
            <a onClick={this.changeState('news')}>
              News
            </a>
          </li>
          <li>
            <a onClick={this.changeState('call')}>
              CallBack
            </a>
          </li>
          <li>
            <a onClick={this.changeState('contacts')}>
              Contacts
            </a>
          </li>
        </ul>
        
      </div>      
    )
  }
};



class Home extends React.Component { 
  constructor() {
    super()
    this.name = 'home';
    this.text = 'Home Page'
  }
  render() {
    return <div>{this.text}</div>
  }
}



// class News extends React.Component { 
//   render() {
//     return <a>News</a>
//   }
// }

// class CallBack extends React.Component { 
//   render() {
//     return <a>CallBack</a>
//   }
// }

// class Contacts extends React.Component { 
//   render() {
//     return <a>Contacts</a>
//   }
// }







export default App;
