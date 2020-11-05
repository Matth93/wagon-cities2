import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const { activeCity } = this.props;

    if (!activeCity) {
      return (
        <div
          className="active-city"
        >
          <p>Selecteer een stad...</p>
        </div>
      );
    }

    const src = `https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`;

    return (
      <div className="active-city">
        <h2>{activeCity.name}</h2>
        <p>{activeCity.adress}</p>
        <img src={src} alt="" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
