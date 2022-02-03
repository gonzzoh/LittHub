import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import PartyListPage from '../pages/PartyListPage';
import PartyShowPage from '../pages/PartyShowPage';
import CreatePostShowPage from '../pages/CreatePostShowPage';
import MainPage from '../pages/MainPage';
import CreatePartyShowPage from '../pages/CreatePartyShowPage';

function Routes() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/allcities' component={CityListPage} /> */}
        <Route exact path='/parties/new' component={CreatePartyShowPage} />
        <Route path='/parties' component={ MainPage } />
        <Route exact path='/posts/new' component={CreatePostShowPage} />
        
        <Route path='/about/:id' render={(props) => <PartyShowPage {...props} />} />
      </Switch>
    );
  }
  
  export default Routes;