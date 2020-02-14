import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { Route, Switch } from 'react-router';
import { store } from './store';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import Header from './components/Header';
import { Footer } from './components/Footer';
import RestaurantPage from './components/RestaurantPage/index';

const App = () => (
  <Provider store={store}>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={RestaurantsListPage} />
        <Route
          exact
          path="/restaurantId/:restaurantAddress"
          component={RestaurantPage}
        />
      </Switch>
    </main>
    <Footer />
  </Provider>

);

export default App;
