import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./EventCard.css";
class EventCard extends Component {
  render() {
    const { item, eventTypeList } = this.props;

    var months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ];

    var colors = [
      "#F08080",
      "#ADD8E6",
      "#FFFACD",
      "#87CEFA",
      "#20B2AA",
      "#FFA07A",
      "#00FA9A",
      "#FFE4E1",
      "#DA70D6",
      "#FFF5EE",
      "#87CEEB",
      "#F5DEB3",
      "#F0F8FF",
      "#FF7F50"
    ];
    let startDate = new Date(item.start);
    var startHr = startDate.getHours();
    var startMin = startDate.getMinutes();
    if (startMin < 10) {
      startMin = "0" + startMin;
    }
    var startampm = "AM";
    if (startHr > 12) {
      startHr -= 12;
      startampm = "PM";
    }

    let endDate = new Date(item.end);
    var endHr = endDate.getHours();
    var endMin = endDate.getMinutes();
    if (endMin < 10) {
      endMin = "0" + endMin;
    }
    var endampm = "AM";
    if (endHr > 12) {
      endHr -= 12;
      endampm = "PM";
    }

    let month = months[startDate.getMonth()];
    let date = startDate.getDate();
    let indexColor = eventTypeList && eventTypeList.indexOf(item.event_type);
    return (
      <div>
        <Card
          style={{ backgroundColor: colors[indexColor] }}
          className="event-card"
        >
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <h3 className="event-type">{item.event_type}</h3>
            <p className="event-time">
              {startHr + ":" + startMin + " " + startampm + " "}-
              {" " + endHr + ":" + endMin + " " + endampm}
            </p>
          </Card.Body>
        </Card>
        <Card className="event-card date-card">
          <Card.Body className="date-body">
            <h3 className="event-type month">{month}</h3>
            <h3 className="event-type date">{date}</h3>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EventCard;
