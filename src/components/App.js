import React, {Component} from 'react';
import NavBar from './NavBar'
// import logo from './logo.svg';
// import './App.css';
// import UserSignUp from './UserSignUp'

class App extends Component {
    render() {
        return (

            <div className="App">
              <div className="App-header">
                <NavBar/>
              </div>
              {this.props.children}
            </div>
  
        );
    }
}

export default App;
