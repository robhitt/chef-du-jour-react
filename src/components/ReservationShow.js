import React, {Component} from 'react'
import { fetchMyReservations } from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ReservationShow extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(props){
      this.props.fetchMyReservations()
    }

    render() {
      if (this.props.myReservations.length > 0 ){
        return (

            <div className="container">{this.props.myReservations.map( (reservation, i)=> {

              return (
                <div className="panel panel-default" key={i}>
                  <div className="panel-heading">
                    <h3 className="panel-title">{reservation.dining_experience.title}</h3>
                  </div>
                  <div className="panel-body">
                    <ul>
                      <li> Date: {new Date(reservation.date).toString().slice(0,10)} </li>
                        <li> Duration: {reservation.dining_experience.length} </li>
                      <li> Price: ${reservation.dining_experience.price} </li>
                      <li> Description: {reservation.dining_experience.description} </li>
                    </ul>
                    </div>
                </div>


              )
            })}</div>

        )
      } else {
        return (
          <div> No Current Reservations </div>
        )
      }

    }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchMyReservations}, dispatch)
}

function mapStateToProps(state){
  return {myReservations: state.myReservations}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow)
