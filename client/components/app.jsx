const {
  Styles
} = mui;
const ThemeManager = Styles.ThemeManager;

App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },
  render() {
    return (
      <div>
        <div className="navbar">
          <Navigator></Navigator>
        </div>
        {this.props.children}
    </div>
    )
  }
});
