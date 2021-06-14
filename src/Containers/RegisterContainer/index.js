import React, { Component } from "react";
import { connect } from "react-redux";
import Register from "../../Screens/Register";
import { register } from "./action";

class RegisterSection extends Component {
  render() {
    return (
      <Register
        register={this.props.register}
        registerErr={this.props.registerErr}
      />
    );
  }
}
function bindAction(dispatch) {
  return {
    register: (value) => {
      dispatch(register(value));
    }
  };
}
const mapStateToProps = (state) => ({
  registerErr: state.RegisterReducer.registerErr
});

export default connect(mapStateToProps, bindAction)(RegisterSection);
