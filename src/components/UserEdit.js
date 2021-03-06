import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editUser, showUser } from '../actions/index'
import { Link } from 'react-router'

class UserEdit extends Component {
  constructor(props) {
      super(props)

      this.state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zipcode: '',
        chef_biography: '',
        instagram: '',
        personal_website: '',
      }

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount(props) {
    this.props.showUser(this.props.routeParams.id)
  }

  componentWillReceiveProps(nextProps) {

    const {
      // pattern matching way of pushing nexstProps into each k,v pair
      users: {
        first_name,
        last_name,
        phone_number,
        email,
        street1,
        street2,
        city,
        state,
        zipcode,
        chef_biography,
        instagram,
        personal_website,
      }
    } = nextProps;

    // or explict way to set local state
    // first_name: nextProps.users.first_name
    // last_name: nextProps.users.last_name


    this.setState({
      first_name,  // same as - first_name: first_name
      last_name,
      phone_number,
      email,
      street1,
      street2,
      city,
      state,
      zipcode,
      chef_biography,
      instagram,
      personal_website,
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,

      // above is same as
      // if (event.target.id == first_name) {
      //   first_name: event.target.value
      // } else if (event.target.id == last_name) {
      //   last_name: event.target.value
      // }
    })
  }

  handleSubmit(event) {
      event.preventDefault()

      // is there a way to pattern match this?
      const userEdit = {
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
          id: this.props.users.id,
      }

      this.props.editUser(userEdit)
  }

  render() {

      return (
            <div className="reservation-photo">
              <div>.</div>
              <div className="horizontal-helper">
                <div className="centered-main">
                  <h2 className="text-center">Welcome back {this.props.users.first_name}!</h2>
                    <div className="container">
                      <div>
                        <h2>Edit your account</h2>
                      </div>

                      <form className="form-horizontal" onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="first_name">First Name:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="first_name" ref="first_name" value={this.state.first_name} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="last_name">Last Name:</label>
                          <div className="col-sm-10">
                            <input type="text" className="form-control" id="last_name" ref="last_name" value={this.state.last_name} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="phone_number">Phone Number:</label>
                          <div className="col-sm-10">
                            <input className="form-control" id="phone_number" ref="phone_number" value={this.state.phone_number} />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                          <div className="col-sm-10">
                            <input className="form-control" id="email" ref="email" value={this.state.email}  />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="street1">Address Line 1:</label>
                          <div className="col-sm-10">
                            <input className="form-control" id="street1" ref="street1" value={this.state.street1} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="street2">Address Line 2:</label>
                          <div className="col-sm-10">
                            <input className="form-control" id="street2" ref="street2" value={this.state.street2} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="city">City:</label>
                          <div className="col-sm-10">
                            <input className="form-control" id="city" ref="city" value={this.state.city} />

                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="state">State:</label>
                          <div className="col-sm-10">

                            <input className="form-control" id="state" ref="state" value={this.state.state} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="zipcode">Zip Code:</label>
                          <div className="col-sm-10">

                            <input className="form-control" id="zipcode" ref="zipcode" value={this.state.zipcode} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="chef_biography">Short Bio:</label>
                          <div className="col-sm-10">

                            <textarea className="form-control" id="chef_biography" ref="chef_biography" value={this.state.chef_biography} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="instagram">Instagram:</label>
                          <div className="col-sm-10">

                            <input className="form-control" id="instagram" ref="instagram" value={this.state.instagram} />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-2" htmlFor="personal_website">Website:</label>
                          <div className="col-sm-10">

                            <input className="form-control" id="personal_website" ref="personal_website" value={this.state.personal_website} />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="control-label col-sm-2"></div>
                          <div className="col-sm-10">
                            <button className="btn button-color-scheme btn-lg" type="submit">Update</button>
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showUser, editUser }, dispatch)
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, mapDispatchToProps)( UserEdit )
