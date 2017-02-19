import React, { Component } from 'react'
import { showUser } from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class UserShow extends Component {
  constructor(props) {
      super(props)
  }

  componentDidMount(props){
    this.props.showUser(this.props.routeParams.id)
  }

  render(){
    return(

      <div>
        <h2>UserShow</h2>
        <div className="container-fluid">

        <div className="row">
          <div className="col-sm-2">
            First Name:
          </div>
          <div className="col-sm-10">
            {this.props.users.first_name}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            Last Name:
          </div>
          <div className="col-sm-10">
          {this.props.users.last_name}

          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            Phone Number:
          </div>
          <div className="col-sm-10">
            {this.props.users.phone_number}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            Email:
          </div>
          <div className="col-sm-10">
            {this.props.users.email}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            Street 1:
          </div>
          <div className="col-sm-10">
            {this.props.users.street1}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            Street 2:
          </div>
          <div className="col-sm-10">
            {this.props.users.street2}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            City:
          </div>
          <div className="col-sm-10">
            {this.props.users.city}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            State:
          </div>
          <div className="col-sm-10">
            {this.props.users.state}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            Zip Code:
          </div>
          <div className="col-sm-10">
            {this.props.users.zipcode}
          </div>
        </div>


        <div className="row">
          <div className="col-sm-2">
            Bio:
          </div>
          <div className="col-sm-10">
            {this.props.users.chef_biography}
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            Instagram
          </div>
          <div className="col-sm-10">
            {this.props.users.instagram}
          </div>
        </div>


        </div>
        <Link to={"/user_edit"}>Edit</Link>
        {this.props.children}
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  // return {
  //   showUser: function(id){
  //     let action = showUser(id)
  //     dispatch(action)
  //   }
  // }
  return bindActionCreators({ showUser }, dispatch)
}

function mapStateToProps(state){
  return {users: state.users}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
