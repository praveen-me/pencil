import React, { Component } from 'react';
import './../../scss/chunks/Loader.scss';


class Loader extends Component {
  render() {
    return (
      <div className="lds-css ng-scope">
        <div className="lds-double-ring">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Loader;
