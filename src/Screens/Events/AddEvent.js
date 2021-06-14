import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  Container,
  Form,
  Dropdown
} from "react-bootstrap";
import DropdownList from "../../Components/Dropdown";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: "",
        iso4217Code: "",
        symbol: "",
        subunit: "",
        isActive: true
      },
      nameError: "",
      iso4217CodeError: "",
      symbolError: "",
      subunitError: ""
    };
  }

  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      value: {
        ...this.state.value,
        [name]: value
      }
    });
  };

  handleClick = (value) => {
    this.setState({
      value: {
        ...this.state.value,
        name: value
      }
    });
  };
  submit = () => {};

  closeModel = () => {
    this.setState({
      value: {
        name: "",
        iso4217Code: "",
        symbol: "",
        subunit: "",
        isActive: true
      },
      nameError: "",
      iso4217CodeError: "",
      symbolError: "",
      subunitError: ""
    });
    this.props.AddModalClose();
  };

  render() {
    const { eventTypeList } = this.props;
    return (
      <div>
        <Modal
          // className="bgColor"
          show={this.props.show}
          onHide={this.closeModel}
          animation={false}
          size="lg"
          backdrop="static"
          className="detailModal"
        >
          <Modal.Header
            style={{ fontSize: "35px", backgroundColor: "#f0f3f5" }}
            closeButton
          >
            <Modal.Title>
              <span style={{ fontSize: "20px" }}>Currency</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div>
                      <Form.Group controlId="name">
                        <Form.Label>Event Name </Form.Label>
                        <Form.Control
                          type="text"
                          autoComplete="off"
                          name="name"
                          onChange={this.onChange}
                          value={this.state.value.name}
                        />
                        <div className="errStyle">{this.state.nameError}</div>
                      </Form.Group>
                    </div>
                    <div>
                      <Form.Group controlId="symbol">
                        <Form.Label> Date Picker </Form.Label>

                        <DropdownList
                          handleClick={this.handleClick}
                          eventTypeList={eventTypeList && eventTypeList}
                        />
                        <div className="errStyle">{this.state.symbolError}</div>
                      </Form.Group>
                    </div>

                    <div>
                      <Form.Group controlId="symbol">
                        <Form.Label> Date Picker </Form.Label>
                        <Form.Control
                          type="text"
                          autoComplete="off"
                          name="symbol"
                          onChange={this.onChange}
                          value={this.state.value.symbol}
                        />
                        <div className="errStyle">{this.state.symbolError}</div>
                      </Form.Group>
                    </div>
                  </Col>
                </Row>{" "}
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#f0f3f5" }}>
            <Button type="submit" onClick={this.submit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddEvent;
