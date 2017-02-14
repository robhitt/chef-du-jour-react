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
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.userPassword.value,
            password_confirmation: this.refs.passwordConfirmation.value
        }
        this.props.createUser(user)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input ref="name" placeholder="Enter Name"/>
                    <input ref="email" placeholder="Enter Email"/>
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
