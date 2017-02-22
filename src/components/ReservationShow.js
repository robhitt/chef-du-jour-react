import React, {Component} from 'react'
import { fetchMyReservations } from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ReservationShow extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(prop){
      this.props.fetchMyReservations()
    }

    render() {
      
      if (this.props.myReservations.length > 0 ){
        return (

            <div>{this.props.myReservations.map( (reservation, i)=> {

              return (
                <div key={i}>
                  <li> {reservation.status}: {reservation.dining_experience.title} </li>
                  <li> {reservation.dining_experience.length} </li>
                  <li> {reservation.dining_experience.price} </li>
                  <li> {reservation.dining_experience.description} </li>

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
  return {myReservations: state.reservations}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow)
