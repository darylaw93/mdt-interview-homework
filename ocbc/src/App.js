import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Transactions from './components/Transactions';
import Transfer from './components/Transfer';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/account" component={Transactions} />
          <Route exact path="/transfer" component={Transfer} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
