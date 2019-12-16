// learning react router
// https://reacttraining.com/react-router/web/guides/quick-start

// Nested Routing
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
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

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components/en`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state/zht`}>Props v. State</Link>
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

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
}

export default App;
