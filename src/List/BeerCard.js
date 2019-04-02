import React, { Component } from 'react';
import ImageLoader from 'react-loading-image';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom'

class BeerCard extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m4 padding-card">
          <div className="card-beer-square">
            <Link to={`/details/${this.props.beer.id}`}>
              <div className="card-beer-container center">
                <ImageLoader
                className="image-beer-card"
                alt="/logo.png"
                src={this.props.beer.image_url}
                loading={() => <Loader type="Oval" color="#f5c34e"/>}
                error={() => <div>Error</div>}
                />
                <div className="center">
                  <span className="font-upper-case yellow-color title-card">{this.props.beer.name}</span>
                  <br></br>
                  <span className="grey-color font-tagline-size">{this.props.beer.tagline}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerCard;
