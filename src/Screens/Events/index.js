import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Calender from "../../Components/Calendar";
import EventCard from "../../Components/EventCards";
import AddEvent from "./AddEvent";
import "./Event.css";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false
    };
  }
  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchEventTypes();
  }
  colors = [
    "highlight1",
    "highlight2",
    "highlight3",
    "highlight4",
    "highlight5",
    "highlight6",
    "highlight7",
    "highlight8",
    "highlight9",
    "highlight10",
    "highlight11",
    "highlight12",
    "highlight13",
    "highlight14"
  ];

  AddModalShow = () => {
    this.setState({
      addModal: true
    });
  };

  AddModalClose = () => {
    this.setState({
      addModal: false
    });
  };

  render() {
    const { eventsList, eventTypeList } = this.props;

    eventsList &&
      eventsList.map((x) => {
        let indexColor = eventTypeList && eventTypeList.indexOf(x.event_type);
        x.colorName = this.colors[indexColor];
      });
    // let indexColor = eventTypeList && eventTypeList.indexOf(item.event_type);
    return (
      <div className="div-event">
        <Row>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <div>
                  <h2>Events</h2>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <div className="div-create">
                  <h6>
                    Create event{" "}
                    <Button
                      onClick={this.AddModalShow}
                      variant="outline-primary"
                      size="sm"
                    >
                      +
                    </Button>{" "}
                  </h6>
                </div>
              </Col>
            </Row>
            <Row>
              {" "}
              {eventsList &&
                eventsList.map((x, index) => (
                  <Col
                    key={index}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    className="cards"
                  >
                    <EventCard item={x} eventTypeList={eventTypeList} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="">
            <div>
              <h4>Calendar</h4>
            </div>
            <Calender eventsList={eventsList && eventsList} />{" "}
          </Col>
        </Row>
        <AddEvent
          show={this.state.addModal}
          AddModalClose={this.AddModalClose}
          eventTypeList={eventTypeList}
        />
      </div>
    );
  }
}

export default Events;
