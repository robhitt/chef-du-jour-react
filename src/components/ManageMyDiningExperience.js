import React, { Component } from 'react'
import { updateDiningExperience, fetchMyDiningExperiences } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'


class ManageMyDiningExperience extends Component {
  constructor(props) {

    super(props)

    this.state = {
      description: '',
      price: 0,
      length: 0,
      user_id: 0,
      title: '',
      user: {},
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount(props) {
      this.props.fetchMyDiningExperiences(this.props.params.id)
  }

  componentWillReceiveProps(nextProps) {
    const {
      myDiningExperience: {
        description,
        price,
        length,
        user_id,
        title,
        user,
      }
    } = nextProps;

    // sets component/local state
    this.setState({
      description, // description: description
      price,
      length,
      user_id,
      title,
      user,
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const diningExperienceToUpdate = {
        title: this.refs.title.value,
        description: this.refs.description.value,
        price: this.refs.price.value,
        length: this.refs.length.value,
        id: this.props.myDiningExperience.id,
    }

    this.props.updateDiningExperience(diningExperienceToUpdate, this.state.user.id)
  }

    render() {
        return (

          <div className="create-user-photo">
            <div>.</div>
            <div className="horizontal-helper">
              <div className="centered-main">

            <div className="containter div-75-width">


                 <h2>Hello Chef {this.state.user.last_name}. You can edit your dining experience below.</h2>
              

              <form className="form-horizontal" onSubmit={this.handleSubmit} onChange={this.handleInputChange}>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="title">Title:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="title" ref="title" value={this.state.title} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="description">Last Name:</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="description" ref="description" value={this.state.description} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="price">Total Price:</label>
                  <div className="col-sm-10">
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon">$</div>
                      <input className="form-control" id="price" ref="price" value={this.state.price} />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="length">Total Hours:</label>
                  <div className="col-sm-10">
                    <input className="form-control" id="length" ref="length" value={this.state.length} />
                  </div>
                </div>

                <div className="form-group">
                  <div className="control-label col-sm-2"></div>
                  <div className="col-sm-10">
                    <button className="btn btn-info btn-lg btn-block" type="submit">Update</button>
                  </div>
                </div>

              </form>
              </div></div></div>


            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateDiningExperience, fetchMyDiningExperiences }, dispatch)
}

// this states state or ownProps (i.e., parentProps)
function mapStateToProps(state, ownProps) {
  return { myDiningExperience: state.myDiningExperiences.find( diningExperience => diningExperience.id == ownProps.params.id ) }
}

export default connect(mapStateToProps, mapDispatchToProps)( ManageMyDiningExperience )
