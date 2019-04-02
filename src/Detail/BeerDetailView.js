import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import DetailContent from './DetailContent';
import Loader from 'react-loader-spinner';

class BeerDetailView extends Component {
  constructor(props){
    super(props);
    this.state = {
      show : false,
      beerId : 1,
      loading: true,
      beer: {}
    }
    this.getBeer = this.getBeer.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
      this.setState({
        show : false,
      })
  }

  async getBeer(props){
    this.setState({
      loading: true,
      show: true
    })
    let beerId = (props) ? (props.match.params.id):(this.props.match.params.id)
    let backend_host = 'https://api.punkapi.com/v2/';
    let endpoint = 'beers/';
    var paramsStr = beerId;
    var api = backend_host + endpoint + paramsStr;
    var type = { method: 'GET',
               mode: 'cors',
               cache: 'default'
              };
    await fetch(api,type)
    .then(results => results.json())
    .then((responseJson) => {
      this.setState({
        show: true,
        beerId : beerId,
        beer: responseJson[0],
        loading: false
      })
    })
  }

  componentWillReceiveProps(props){
    this.getBeer(props);
  }

  componentDidMount(){
    this.getBeer();
  }

  render() {
    return (
      <div>
        <SweetAlert
          title=""
          show={this.state.show}
          onConfirm={this.closeModal}
          showConfirm={false}
          onCancel={this.closeModal}
          allowEscape={true}
          customClass={"modal-view"}
        >
          {this.state.loading ? (
            <Loader type="Oval" color="#f5c34e"/>
          ):(
            <DetailContent beer = {this.state.beer}/>
          )}
        </SweetAlert>
      </div>
    );
  }
}

export default BeerDetailView;
