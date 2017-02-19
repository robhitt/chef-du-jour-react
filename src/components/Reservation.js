import React, {Component} from 'react'
import { fetchDiningExperiences, reserveDiningExperience } from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
// import {Link} from 'react-router'

class Reservation extends Component {
  constructor() {
      super()
  }

  componentDidMount(){
      this.props.fetchDiningExperiences()
  }

  handleClick(event) {
    event.preventDefault()
    let diningExperienceId = event.target.id
    this.props.reserveDiningExperience({ id: diningExperienceId })
  }

  render() {
    if (this.props.dining_experiences) {
      const dining_experiences = this.props.dining_experiences

      return(
        <div>
          <h2> Reserve a Chef </h2>
          <div className="row">
            { dining_experiences.map((dining_experience, i) => {

              //if (dining_experience.status === 'available') {
              return(
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <img src="..." alt="..."/>
                    <div className="caption">
                      <Link to={`dining_experiences/${dining_experience.id}`} ><h3>{dining_experience.title }</h3></Link>

                      <p key={i}>{ dining_experience.description }</p>
                      <button id={ dining_experience.id } onClick={ this.handleClick.bind(this) } className="btn btn-primary">Reserve Me</button>
                    </div>
                  </div>
                </div>
              )
              //}
              }
          )}
          </div>
        </div>
      )
    } else {
      return <div>loading...</div>
    }
  }
}

function mapStateToProps(state) {
  return { dining_experiences: state.diningExperiences }
}

function mapDispatchToProps(dispatch) {
  // return {
  //   showUser: function(id){
  //     let action = showUser(id)
  //     dispatch(action)
  //   }
  // }
  return bindActionCreators({ fetchDiningExperiences, reserveDiningExperience }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Reservation)
  // Show all experiences
  //   All experiences must have a reserve button
  // OnClick connect experience to user, post request to API in the reservation action (index.js)
  // reservation.user = reservation (controller on the rails side)
  // RAILS: look into config file in routes
  // RAILS: look into serializer

  // TBD Show all available experiences
