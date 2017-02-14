import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import UserSignUp from './user-sign-up'

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default App;
