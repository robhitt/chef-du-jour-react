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

    handleClick(event) {
        event.preventDefault()
        this.props.logoutUser()
    }

renderExperience() {
  if (!!sessionStorage.getItem('jwt')) {
    return (
      <div>
        <ul className="nav navbar-nav">
          <li><Link to='/reservation-finder'><span className="glyphicon glyphicon-cutlery"/>Reserve a Chef</Link></li>
          <li><Link to={`/user/create-dining-experience`}><span className="glyphicon glyphicon-sunglasses"/>Become a Chef</Link></li>
          <li><Link to={`/user/${this.props.user.id}/my_dining_experiences`}><span className="glyphicon glyphicon-sunglasses"/> Your Listings</Link></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li><Link to={`/user/${this.props.user.id}`}><span className="glyphicon glyphicon-user"/> Hi {this.props.user.first_name}!</Link></li>
          <li><a href="" onClick={this.handleClick}><span className="glyphicon glyphicon-log-out"/> Logout</a></li>
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><Link to={"/signup"}><span className="glyphicon glyphicon-user"/> SignUp</Link></li>
          <li><Link to={"/signin"}><span className="glyphicon glyphicon-log-in"/> Login</Link></li>
        </ul>
      </div>
    )
  }
}

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="nav navbar-nav">
            <Link to='/'><img src={'http://i63.tinypic.com/2hoycmq.png'} alt="Chef Du Jour Logo" className="vertical-helper" /></Link>
          </div>
              {this.renderExperience()}
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state, ownprops) {
    return {user: state.users}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logoutUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
