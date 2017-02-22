import React, { Component } from 'react'
import { showUser, deleteUser, logoutUser } from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class UserShow extends Component {
  constructor(props) {
      super(props)

      this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(props){
    this.props.showUser(this.props.routeParams.id)
  }

  handleDelete() {
    event.preventDefault() // Not sure if needed for a link
    deleteUser(this.props.users.id) // sends action off
  }

  render() {
    var personal_url = `http:\/\/${this.props.users.personal_website}`

    return(

      <div className="reservation-photo">
        <div>.</div>
        <div className="horizontal-helper">
          <div className="centered-main">
            <h2>Welcome back {this.props.users.first_name}!</h2>
            <div className="container-fluid list-group">

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>First Name:</strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.first_name}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>Last Name: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.last_name}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>Phone #: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.phone_number}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>Email: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.email}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>Street 1: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.street1}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>Street 2: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.street2}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>City: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.city}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>State: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.state}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>Zip Code: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.zipcode}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong>  Bio:</strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  {this.props.users.chef_biography}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 list-group-item panel-no-border">
                  <strong> Instagram: </strong>
              </div>
              <div className="col-sm-10 list-group-item panel-no-border">
                {this.props.users.instagram}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2 list-group-item panel-no-border">
                <strong> Website: </strong>
                </div>
                <div className="col-sm-10 list-group-item panel-no-border">
                  <a href={personal_url}>{this.props.users.personal_website}</a>
                </div>
              </div>

              <p> </p>

              <span className="button-separator">
                <Link to={"/user_edit"}><button type="button" className="btn btn-primary btn-lg button-color-scheme">Edit Profile</button></Link>
              </span>

                <span className="button-separator">
                <button type="button" className="btn btn-danger btn-lg active" onClick={ this.handleDelete }>Delete Profile</button>
              </span>
            </div>
          </div>
        </div>
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
  return bindActionCreators({ showUser, deleteUser }, dispatch)
}

function mapStateToProps(state){
  return {users: state.users}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
