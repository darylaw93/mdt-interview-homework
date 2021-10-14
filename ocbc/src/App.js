import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Account from './components/Account';
function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/account" component={Account} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
