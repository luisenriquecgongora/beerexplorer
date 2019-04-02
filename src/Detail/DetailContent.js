import React, { Component } from 'react';
import RecommendedBeersList from './RecommendedBeersList';

function FoodPairingList(props) {
  const pairings = props.foodPairing;
  const pairingsList = pairings.map((pairing,idx) =>
    <div key={idx} className="font-body left-align">
        <span className="grey-text text-darken-1">
          - {pairing}
        </span>
    </div>
  );
  return (
    <div>
      <span className="font-upper-case left grey-text text-darken-2 font-tagline-size">Best Served with: </span>
      <br></br>
      <div>{pairingsList}</div>
    </div>
  );
}

class DetailContent extends Component {
  render() {
    return (
      <div className="row modal-content">
        <div className="col s12 m2">
          <img alt="Beer" className="img-modal left" src={this.props.beer.image_url}></img>
        </div>
        <div className="col s12 m10">
          <span className="font-upper-case left grey-text text-darken-2">{this.props.beer.name}</span><br></br>
          <span className="font-body left grey-text text-lighten-1 font-tagline-size">{this.props.beer.tagline}</span><br></br>
          <div className="yellow-space"></div><br></br>
          <span className="font-upper-case left grey-text text-darken-2 font-tagline-size">IBU: <span className="grey-text font-body">{this.props.beer.ibu}</span>&nbsp;&nbsp;</span>
          <span className="font-upper-case left grey-text text-darken-2 font-tagline-size">IBU: <span className="grey-text font-body">{this.props.beer.ibu}</span>&nbsp;&nbsp;</span>
          <span className="font-upper-case left grey-text text-darken-2 font-tagline-size">EBC: <span className="grey-text font-body">{this.props.beer.ebc}</span></span><br></br>
          <div className="left-align">
              <span className="grey-text text-darken-1">
                {this.props.beer.description}
              </span>
          </div>
          <FoodPairingList foodPairing={this.props.beer.food_pairing}/>
        </div>
      <br></br>
      <RecommendedBeersList ibu={this.props.beer.ibu} abv={this.props.beer.abv} ebc={this.props.beer.ebc}/>
    </div>
    );
  }
}

export default DetailContent;
