import React, { Component } from 'react'
import {Link} from 'react-router'

export default class Home extends Component {

render(){
  return(
    <div className="background-photo">
      <div className="centered">

        <div className="jumbotron" style={{paddingTop: "30px", paddingBottom: "30px", borderRadius: "15px"}}>
          <div className="border-space">
            <img src="http://i65.tinypic.com/11vgolt.png" width="100%"/>
            <p>Welcome to Chef Du Jour!  Need a chef? We're your answer, anytime, anywhere.</p>
            <p><Link to={"/signup"} className="btn btn-primary btn-lg button-color-scheme margin-bot-5px" role="button">Create An Account</Link>
            <span> </span>
            <Link to={"/signin"} className="btn btn-primary btn-lg button-color-scheme margin-bot-5px" role="button">Log In</Link></p>

          </div>
        </div>
      </div>
    </div>
      )
    }
}
