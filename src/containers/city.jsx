import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions/index.js';

class City extends Component {
  handleClick = (city) => {
    this.props.setActiveCity(city);
  }

  render() {
    const { city } = this.props;

    return (
      <li
        className="list-group-item"
        onClick={() => this.handleClick(city)}
      >
        {city.name}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
