import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom'

class TitleView extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <Link to="/">
            <h3 className="font-upper-case">
              <span className="yellow-color">BEER</span>
              <span className="grey-color">EXPLORER</span>
            </h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default TitleView;
