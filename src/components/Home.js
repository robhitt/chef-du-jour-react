import React, { Component } from 'react'

export default class Home extends Component {

render(){
  return(
    <div className="background-photo">
      <div className="centered">
        <div className="jumbotron">
          <div className="border-space">
            <img src="http://i65.tinypic.com/11vgolt.png" />
            <p>Welcome to Chef Du Jour!  Need a chef? We're your answer, anytime, anywhere.</p>
            <p><a className="btn btn-primary btn-lg" href="/signup" role="button">Sign Up</a> <a className="btn btn-primary btn-lg" href="/signin" role="button">Log In</a></p>
          </div>
        </div>
      </div>
    </div>
      )
    }

}
