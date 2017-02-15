import React, {Component} from 'react'

export default class NavBar extends Component {
  constructor() {
      super()
  }

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="nav navbar-nav">
            <a href='./'><img src={'http://i64.tinypic.com/30s9fsg.png'} /></a>
            {/* <a className="navbar-brand" href="#">Chef Du Jour</a> */}
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#">Choose a Chef</a></li>
            <li><a href="#">Become a Chef</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li><a href="#" className="btn btn-info" role="button">Sign Up</a></li> */}
            <li className="active"><a href="./signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>


    )
  }
}
