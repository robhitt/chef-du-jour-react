import React, {Component} from 'react';
import {render} from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import shallowCompare from 'react-addons-shallow-compare';
// Render the Calendar
import { fetchAvaliableListingsByCalendar } from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Reservation from './Reservation'

class Calendar extends Component {
    constructor() {
      super()
        this.today = new Date();
        this.min = Number(new Date()) - (24 * 60 * 60 * 1000) * 7; //One week before today
        this.maxDate = Number(new Date()) + (24 * 60 * 60 * 1000) * 7; // One week after today

    }
    componentDidMount(){
      let date = {
        date: new Date().toDateString()
        }
        this.props.fetchAvaliableListingsByCalendar(date)
     }

handleClick(event){
  let date = {date: event.format("ddd, D MMM YYYY")}
  this.props.fetchAvaliableListingsByCalendar(date)
}

shouldComponentUpdate(nextProps, nextState) {
   return shallowCompare(this, nextProps, nextState);

 }
    render() {

        return (
            <div className= "container">
              <div className="row text-center">
                <InfiniteCalendar width={360} height={265} selectedDate={this.today} minDate={this.today} maxDate={this.maxDate} keyboardSupport={true} min={this.min} max={this.maxDate} onSelect={this.handleClick.bind(this)} rowHeight={52}/>
                <div>
                  <Reservation />
                </div>
              </div>
            </div>
          )
    }

}

const mapStateToProps = (state) =>{
return  { reservations: state.reservations }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchAvaliableListingsByCalendar}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
