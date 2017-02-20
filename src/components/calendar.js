import React, {PureComponent} from 'react';
import {render} from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import shallowCompare from 'react-addons-shallow-compare'
// Render the Calendar

export default class calendar extends PureComponent {
    constructor() {
      super()
        this.today = new Date();
        this.min = Number(new Date()) - (24 * 60 * 60 * 1000) * 7;
        this.maxDate = Number(new Date()) + (24 * 60 * 60 * 1000) * 7; // One week before today
        this.max= Number(new Date()) + (24 * 60 * 60 * 1000) * 7; // One week before today
    }

handleClick(event){
  debugger
}

shouldComponentUpdate(nextProps, nextState) {
  console.log(this.today).format()
   return shallowCompare(this, nextProps, nextState);

 }
    render() {

        return (
            <div>
              <InfiniteCalendar width={400} height={280} selectedDate={this.today} minDate={this.today} maxDate={this.maxDate} keyboardSupport={true} min={this.min} max={this.max} onSelect={this.handleClick}/>
            </div>
          )
    }

}
