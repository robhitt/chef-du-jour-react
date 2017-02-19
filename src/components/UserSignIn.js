import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {loginUser} from '../actions/index'

class UserSignIn extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const loginParams = {
            // set up exact as params in Rails DB
            email: this.refs.email.value,
            password: this.refs.userPassword.value
        }
        this.props.loginUser(loginParams)
    }

    render() {
        return (
            <div className="container">
              <div>
                <h2>Sign Into Chef Du Jour</h2>
              </div>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input className="form-control" ref="email" placeholder="Enter Email" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="userPassword">Password:</label>
                  <div className="col-sm-10">
                    <input className="form-control" type="password" ref="userPassword" placeholder="Enter Password" />
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
  return bindActionCreators({ loginUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignIn)
