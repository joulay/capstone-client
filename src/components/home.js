import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './home.css';
import SignIn from './sign-in';
import RegistrationForm from './registration-form';
import UpcomingWeddings from './upcoming-weddings';
import Client from './client';
import ClientDetail from './client-detail';
import Edit from './edit';
import Photos from './photo-upload';
import Notes from './notes';
import { connect } from 'react-redux';

function Home(props) {
    return (
      <Router>
        <div className="Home">
          <main>
            <Switch>
              <Redirect exact from="/" to="/signup" />
              <Route exact path="/signup" component={SignIn} />
              <Route exact path="/register" component={RegistrationForm} />
              <Route exact path="/home" component={UpcomingWeddings} />
              <Route exact path="/client" component={Client} />
              <Route exact path="/brides/:id" component={ClientDetail} />
              <Route exact path="/edit/:id" component={Edit} />
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/notes" component={Notes} />
            </Switch>
          </main>
        </div>
      </Router>
    );
}



export default connect()(Home);


