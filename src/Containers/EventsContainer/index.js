import React, { Component } from "react";
import { connect } from "react-redux";
import Events from "../../Screens/Events";
import { fetchEvents, fetchEventTypes } from "./action";

class EventsSection extends Component {
  render() {
    return (
      <Events
        fetchEvents={this.props.fetchEvents}
        eventsList={this.props.EventsList}
        fetchEventTypes={this.props.fetchEventTypes}
        eventTypeList={this.props.EventTypeList}
      />
    );
  }
}
function bindAction(dispatch) {
  return {
    fetchEvents: () => {
      dispatch(fetchEvents());
    },
    fetchEventTypes: () => {
      dispatch(fetchEventTypes());
    }
  };
}
const mapStateToProps = (state) => ({
  EventsList: state.EventsReducer.EventsList,
  EventTypeList: state.EventsReducer.EventTypeList
});

export default connect(mapStateToProps, bindAction)(EventsSection);
