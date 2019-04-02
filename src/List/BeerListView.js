import React, { Component } from 'react';
import BeerCard from './BeerCard';
import Loader from 'react-loader-spinner'
import BottomScrollListener from 'react-bottom-scroll-listener';

function BeerList(props) {
  let beersArr = [...props.beers];
  if(beersArr.length === 0) return false;
  else{
    const beersList = beersArr.map((beer) => {
      return <BeerCard key={beer.id} beer={beer}/> /* <h1>{beer.name}</h1>*/
    });
    return beersList;
  }
}

class BeerListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      nextLoad: 1,
      maxPerLoad: 20,
      loading: true
    }
    this.getBeers = this.getBeers.bind(this);
    this.nextLoad = this.nextLoad.bind(this);
  }

  async getBeers(){
    this.setState({loading: true})
    let backend_host = 'https://api.punkapi.com/v2/';
    let endpoint = 'beers/';
    var paramsStr = `?page=${this.state.nextLoad}&per_page=${this.state.maxPerLoad}`
    var api = backend_host + endpoint + paramsStr;
    var type = { method: 'GET',
               mode: 'cors',
               cache: 'default'
              };
    await fetch(api,type)
    .then(results => results.json())
    .then((responseJson) => {
      let nextLoad = this.state.nextLoad + 1
      let beers = [...this.state.beers].concat(responseJson)
      this.setState({
        beers: beers,
        loading: false,
        nextLoad: nextLoad
      })
    })
  }

  async nextLoad(){
    if(!this.state.loading){this.getBeers();};
  }

  componentDidMount(){
    this.getBeers();
  }

  render() {
    return (
      <BottomScrollListener onBottom={this.nextLoad}>
        <div>
          <div className="row">
            <BeerList beers={this.state.beers}/>
          </div>
          <div className="row center">
            {this.state.loading && <Loader type="Oval" color="#f5c34e"/>}
          </div>
        </div>
      </BottomScrollListener>
    );
  }
}

export default BeerListView;
