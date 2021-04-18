import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import InventoryManagementContainer from './InventoryManagement/containers/InventoryManagementContainer.js'
import Header from './Header.js';
import PageNotFound from './PageNotFound.js';

class App extends Component {
  render(){
    return(
      <Router>
        <header>
            <Header />
        </header>
        <main>
          <Switch>
              <Route exact path="/" render={() => (
                <InventoryManagementContainer/>
              )} />

              <Route path="/" render={() => (
                <PageNotFound />
              )} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App;
