import React, {Component} from 'react';
import Reservation from './Reservation'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchAvaliableListings, reserveDiningExperience} from '../actions'
// import logo from './logo.svg';
// import './App.css';
// import UserSignUp from './UserSignUp'

class ReservationFinder extends Component {
  constructor() {
      super()
  }

  componentDidMount(){
      this.props.fetchAvaliableListings()
  }

  handleClick(event) {
    event.preventDefault()

    const reservationParams = {
      id: event.target.id,
      date: this.refs.date.value
    }
    this.props.reserveDiningExperience(reservationParams)
  }

  handleSubmit(event) {
      event.preventDefault()
      const searchParams = {
          // set up exact as params in Rails DB
          date: this.refs.date.value,
      }
      this.props.fetchAvaliableListings(searchParams)
  }


    render() {
        return (
          <div className="reservation-photo">
            <div>.</div>
            <div className="horizontal-helper">
              <div className="centered-main">

                <h2> Choose a chef by available date by clicking the form below</h2>
                <form className="form-horizontal" onInput={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <div className="col-sm-10">
                      <input type="date" className="form-control" ref="date" defaultValue={new Date().toISOString().slice(0, 10)} onInput={this.handleSubmit.bind(this)}/>
                      </div>
                    </div>

                {/* <div className="form-group">
                  <div className="control-label col-sm-2">
                    <button className="btn btn-info btn-lg btn-block" type="submit">Search</button>
                  </div>
                </div> */}
              </form>

              <Reservation reservations={this.props.reservations} handleClick={this.handleClick.bind(this)}/>
            </div>
          </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
  return { reservations: state.reservations }
}

function mapDispatchToProps(dispatch) {
  // return {
  //   showUser: function(id){
  //     let action = showUser(id)
  //     dispatch(action)
  //   }
  // }
  return bindActionCreators({ fetchAvaliableListings, reserveDiningExperience }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationFinder)
