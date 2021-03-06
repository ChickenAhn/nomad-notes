import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from '../../Routes/Notes';
import Note from '../../Routes/Note';
import Add from '../../Routes/Add';
import Edit from '../../Routes/Edit';

// import { Query } from './queries';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path={'/'} component={Notes} />
            <Route path={'/add'} component={Add} />
            <Route path={'/note/:id'} component={Note} />
            <Route path={'/edit/:id'} component={Edit} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
