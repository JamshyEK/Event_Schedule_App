import React, { Component } from "react";

import Select from "react-select";

class DropdownList extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = (selectedOption) => {
    let value = selectedOption.value;
    this.props.handleClick(value);
    this.setState({ selectedOption: selectedOption, value: value });
  };

  render() {
    const { eventTypeList } = this.props;
    const { selectedOption } = this.state;
    let optionArray = [];
    eventTypeList.map((x) => {
      optionArray.push({ value: x, label: x });
    });
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={optionArray}
      />
    );
  }
}

export default DropdownList;
