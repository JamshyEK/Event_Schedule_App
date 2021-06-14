import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        email: "",
        password: "",
        repassword: ""
      },
      errormsg: {
        emailerr: "",
        passworderr: "",
        repassworderr: ""
      }
    };
  }

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      value: {
        ...this.state.value,
        [name]: value
      },
      errormsg: {
        ...this.state.errormsg,
        emailerr: "",
        passworderr: "",
        repassworderr: ""
      }
    });
  };

  handleBlur = () => {
    if (this.state.value.password !== this.state.value.repassword) {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          passworderr: "Password mismatched"
        }
      });
      return false;
    } else {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          passworderr: "",
          repassworderr: ""
        }
      });
      return true;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validate() && this.handleBlur()) {
      console.log("validation success");
      this.props.register(this.state.value);
    } else {
      console.log("validation failed");
    }
  };

  validate = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      this.state.value.email === "" &&
      this.state.value.password === "" &&
      this.state.value.password === ""
    ) {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "Email is required",
          passworderr: "Password is required",
          repassworderr: "RePassword is required"
        }
      });
      return false;
    }
    if (this.state.value.email === "") {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "Email is required",
          passworderr: ""
        }
      });
      return false;
    } else if (!re.test(this.state.value.email)) {
      this.setState({
        ...this.state,

        errormsg: {
          ...this.state.errormsg,
          emailerr: "Enter valid email",
          passworderr: ""
        }
      });
      return false;
    } else if (this.state.value.password === "") {
      this.setState({
        ...this.state,

        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          passworderr: "Password is required"
        }
      });
      return false;
    } else if (this.state.value.password.length < 6) {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          passworderr: "Password min length is 6"
        }
      });
      return false;
    } else if (this.state.value.repassword === "") {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          repassworderr: "RePassword is required"
        }
      });
      return false;
    } else {
      this.setState({
        ...this.state,
        errormsg: {
          ...this.state.errormsg,
          emailerr: "",
          passworderr: ""
        }
      });
      return true;
    }
  };

  render() {
    return (
      <Container>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                {this.state.errormsg.emailerr}
                {this.props.registerErr}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                {this.state.errormsg.passworderr}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Re Password</Form.Label>
              <Form.Control
                name="repassword"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              <Form.Text className="text-muted">
                {this.state.errormsg.repassworderr}
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Register
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Register;
