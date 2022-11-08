
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    text:'',
    }

  }

  changeState = () => {


  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Home/>
          </li>
          <li>
            <News />
          </li>
          <li>
            <CallBack />
          </li>
          <li>
            <Contacts/>
          </li>
        </ul>
        <p>{this.state.text}</p>
      </div>      
    )
  }
};

class Home extends React.Component { 
  render() {
    return <a>Home</a>
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
