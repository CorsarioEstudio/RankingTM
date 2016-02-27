const {
  Router,
  Route,
  IndexRoute,
  history
} = ReactRouter;

const browserHistory = history.createHistory();

Routes = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Rankings}/>
          <Route path="login" component={Login}/>
          <Route path="signup" component={SignUp}/>
        </Route>
      </Router>
    );
  }
});
