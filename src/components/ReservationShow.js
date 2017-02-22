import React, {Component} from 'react'
import {reservationShow} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ReservationsShow extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(prop) {}
    render() {
        return ()

    }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({reservationShow}, dispatch)
}

function mapStateToProps(state){
  return {reservations: state.reservations}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationShow)
