import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import landingpage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={landingpage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
