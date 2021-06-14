import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../../Screens/Login";
import { login } from "./action";

class LoginSection extends Component {
  render() {
    return (
      <Login login={this.props.login} logOutAction={this.props.logOutAction} />
    );
  }
}
function bindAction(dispatch) {
  return {
    login: (value) => {
      dispatch(login(value));
    }
  };
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, bindAction)(LoginSection);
