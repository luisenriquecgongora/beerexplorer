import React, { Component } from 'react';
import BeerListView from'./List/BeerListView';
import TitleView from './Title/TitleView';
import BeerDetailView from './Detail/BeerDetailView';
import {
  BrowserRouter,
  Route, Switch
} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="font-body container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path='*/details/:id' component={BeerDetailView}/>
            </Switch>
            <TitleView />
            <BeerListView />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
