// learning react router
// https://reacttraining.com/react-router/web/guides/quick-start

// Nested Routing
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Posts from './pages/Posts';
import Rainbow from './hoc/Rainbow';
import Post from './pages/Post';
import LoginForm from './pages/LoginForm';
import Todos from './pages/Todos';
import Todo from './pages/Todo';

import { Layout } from 'antd';
const { Content, Footer } = Layout;

// RootReducer.dispatch({type: 'ADD_POST', todo: 'buy milk'});
// RootReducer.dispatch({type: 'ADD_POST', todo: 'sleep more'});

const Home = (props) => {
  // console.log(props)
  return <div className="container"><h2>Home</h2></div>;
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
      <Layout className="layout">
        <NavBar />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Switch>
            <Route exact path="/" component={Rainbow(Home)} />
            <Route path="/todos/:id" component={Todo} />
            <Route path="/todos" component={Todos} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/posts" component={Posts} />
            <Route path="/topics" component={Topics} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        <a href="https://mac-sin.github.io/my-app/" target="noopener" style={{color:"black",padding:8}}>https://mac-sin.github.io/my-app/</a>
      </Footer>
    </Router>
  );
}

export default App;
