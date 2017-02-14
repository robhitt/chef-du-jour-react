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
        const user = {
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
        this.props.createUser(user)
    }


    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input ref="first_name" placeholder="Enter First Name"/>
                <input ref="last_name" placeholder="Enter Last Name"/>
                <input ref="phone_number" placeholder="Enter Phone Number"/>
                <input ref="email" placeholder="Enter Email"/>
                <input ref="street1" placeholder="Enter Address"/>
                <input ref="street2" placeholder="Enter Address"/>
                <input ref="city" placeholder="Enter City"/>
                <input ref="state" placeholder="Enter state"/>
                <input ref="zipcode" placeholder="Enter Zipcode"/>
                <input ref="chef_biography" placeholder="Tell us about your cheffing experience!"/>
                <input ref="instagram" placeholder="TheAwesomeChef"/>
                <input ref="personal_website" placeholder="www.awesomechef.com"/>
                <input type="password" ref="userPassword" placeholder="Enter Password"/>
                <input type="password" ref="passwordConfirmation" placeholder="Verify Password"/>
                <button type="submit" ref="userPassword">Submit</button>

              </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
