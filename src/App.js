// learning react router
// https://reacttraining.com/react-router/web/guides/quick-start

// Nested Routing
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NavBar from './components/NavBar';

const Login = () => {
  return <div className="container"><h2>Login</h2></div>;
}

const Home = () => {
  return <div className="container"><h2>Home</h2></div>;
}

const About = () => {
  return <div className="container"><h2>About</h2></div>;
}

const Topics = ({ match }) => {
  return (
    <div className="container">
      <h2>Topics</h2>
      <ul className="nav-bar">
        <li>
          <NavLink to={`${match.url}/components/en`} activeClassName="active">Components</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state/zht`} activeClassName="active">Props v. State</NavLink>
        </li>
      </ul>
      <Route path={`${match.path}/:id/:lang/`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

const Topic = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3>Topic</h3>
      <p>match.url: "{match.url}"</p>
      <p>match.params.id: "{match.params.id}"</p>
      <p>match.params.lang: "{match.params.lang}"</p>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/login" component={Login} />
        <div style={{padding:8}}>https://mac-sin.github.io/my-app/</div>
      </div>
    </Router>
  );
}

export default App;
