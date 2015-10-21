import Router from 'react-router';
import { Link, Route } from 'react-router';

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});