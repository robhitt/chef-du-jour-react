import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/index'
import {Link} from 'react-router'
class NavBar extends Component {
  constructor() {
      super()

      this.handleClick = this.handleClick.bind(this)
  }

handleClick(event){
  event.preventDefault()
  this.props.logoutUser()
}

renderExperience(){
  if(!!sessionStorage.getItem('jwt')){
    console.log(this.props.user)
    return <li><Link to={`/user/create-dining-experience`}>Create a Dining Experience</Link></li>
  }
}

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="nav navbar-nav">
            <a href='./'><img src={'http://i64.tinypic.com/30s9fsg.png'} alt="Chef Du Jour Logo" /></a>
            {/* <a className="navbar-brand" href="#">Chef Du Jour</a> */}
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#">Choose a Chef</a></li>
            {this.renderExperience()}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {/* <li><a href="#" className="btn btn-info" role="button">Sign Up</a></li> */}
            <li className="active"><a href="./signup"><span className="glyphicon glyphicon-user"> SignUp</span></a></li>
            <li><a href="./signin"><span className="glyphicon glyphicon-log-in"> Login</span></a></li>
            <li><a href="" onClick={this.handleClick}><span className="glyphicon glyphicon-log-out"> Logout</span></a></li>
          </ul>
        </div>
      </nav>


    )
  }
}

function mapStateToProps(state, ownprops){
  return {
    user: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
