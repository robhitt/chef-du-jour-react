import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createUser} from '../actions/index'

class UserSignUp extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const signUpParams = {
            // set up exact as params in Rails DB
            first_name: this.refs.first_name.value,
            last_name: this.refs.last_name.value,
            phone_number: this.refs.phone_number.value,
            email: this.refs.email.value,
            street1: this.refs.street1.value,
            street2: this.refs.street2.value,
            city: this.refs.city.value,
            state: this.refs.state.value,
            zipcode: this.refs.zipcode.value,
            chef_biography: this.refs.chef_biography.value,
            instagram: this.refs.instagram.value,
            personal_website: this.refs.personal_website.value,
            password: this.refs.userPassword.value,
            password_confirmation: this.refs.passwordConfirmation.value
        }
        this.props.createUser(signUpParams)
    }

    render() {
        return (

            <div className="container">
              <div>
                <h2>Sign Up For an Account on Chef Du Jour</h2>
              </div>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="first_name">First Name:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="first_name" placeholder="Enter First Name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="last_name">Last Name:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="last_name" placeholder="Enter Last Name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="phone_number">Phone Number:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="phone_number" placeholder="Enter Phone Number" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="email" placeholder="Enter Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="street1">Address Line 1:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="street1" placeholder="Enter Address" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="street2">Address Line 2:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="street2" placeholder="Enter Address" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="city">City:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="city" placeholder="Enter City" />

                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="state">State:</label>
                  <div className="col-sm-10">

                    <input className="form-control" ref="state" placeholder="Enter state" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="zipcode">Zip Code:</label>
                  <div className="col-sm-10">

                    <input className="form-control" ref="zipcode" placeholder="Enter Zipcode" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="chef_biography">Short Bio:</label>
                  <div className="col-sm-10">

                    <input className="form-control" ref="chef_biography" placeholder="Tell us about your cheffing experience!" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="instagram">Instagram:</label>
                  <div className="col-sm-10">

                    <input className="form-control" ref="instagram" placeholder="@TheAwesomeChef" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="personal_website">Website:</label>
                  <div className="col-sm-10">

                    <input className="form-control" ref="personal_website" placeholder="www.awesomechef.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="userPassword">Password:</label>
                  <div className="col-sm-10">

                    <input className="form-control" type="password" ref="userPassword" placeholder="Enter Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="passwordConfirmation">Password Confirmation:</label>
                  <div className="col-sm-10">
                    <input className="form-control" type="password" ref="passwordConfirmation" placeholder="Verify Password" />
                  </div>
                </div>

                <div className="form-group">
                  <div className="control-label col-sm-2"></div>
                  <div className="col-sm-10">
                    <button className="btn btn-info btn-lg btn-block" type="submit">Submit</button>
                  </div>
                </div>


              </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
