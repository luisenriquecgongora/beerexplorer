import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageLoader from 'react-loading-image';
import Loader from 'react-loader-spinner';

function BeerList(props) {
  const beers = props.beers;
  if(beers.length === 0){
    return (
      <span className="grey-text text-darken-1">
        No similar beers
      </span>
    );
  }else{
    const beerList = beers.map((beer,idx) =>
    <div key={idx} className="col s12 m4 padding-card">
      <div className="card-beer-square">
        <Link to={`/details/${beer.id}`}>
          <div className="card-beer-container-modal center">
            <ImageLoader
            className="image-beer-card"
            alt="/logo.png"
            src={beer.image_url}
            loading={() => <Loader type="Oval" color="#f5c34e"/>}
            error={() => <div>Error</div>}
            />
            <div className="center">
              <span className="grey-text text-darken-1 font-upper-case">{beer.name}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
    );
    return (
      <div>{beerList}</div>
    );
  }
}

class RecommendedBeersList extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      loading: true
    }
    this.getRecommendedBeers = this.getRecommendedBeers.bind(this);
  }

  async getRecommendedBeers(){
    let backend_host = 'https://api.punkapi.com/v2/';
    let endpoint = 'beers/';

    var paramsStr = `?page=1&per_page=3&ibu_gt=${Math.round(this.props.ibu)}&ibu_lt=${Math.round(this.props.ibu)+30}&abv_gt=${Math.round(this.props.abv)}&abv_lt=${Math.round(this.props.abv)+30}&ebc_gt=${Math.round(this.props.ebc)}&ebc_lt=${Math.round(this.props.ebc)+30}`;
    var api = backend_host + endpoint + paramsStr;
    var type = { method: 'GET',
               mode: 'cors',
               cache: 'default'
              };
    await fetch(api,type)
    .then(results => results.json())
    .then((responseJson) => {
      this.setState({
        beers: responseJson,
        loading: false
      })
    })
  }

  componentWillReceiveProps(props){
    this.getRecommendedBeers();
  }

  componentDidMount(){
    this.getRecommendedBeers();
  }

  render() {
    return (
      <div className="col s12">
        <br></br>
        <div className="col s12 left">
          <span className="left font-upper-case grey-text text-darken-1">
            You may also like:
          </span>
        </div>
        {this.state.loading ? (
          <Loader type="Oval" color="#f5c34e"/>
        ):(
          <BeerList beers={this.state.beers}/>
        )}
      </div>
    );
  }
}

export default RecommendedBeersList;
