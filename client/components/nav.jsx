const {
  AppBar,
  FlatButton,
  IconButton,
  IconMenu,
  MenuItem
} = mui;

const {
  Link,
  History
} = ReactRouter;

var buttonStyle = {
  marginTop: '14px',
  backgroundColor: 'transparent',
  color: 'white'
},
iconStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  marginTop: '7.5px'
};

Navigator = React.createClass({
  getInitialState: function(){
    return {
      willSignIn: true
    }
  },
  changeWillSignIn: function(event) {
    this.setState({willSignIn: !this.state.willSignIn});
    return true;
  },
  goHome: function () {
    this.setState({willSignIn: true});
    return true;
  },
  render() {
    var text = this.state.willSignIn ? 'Ingresar' : 'Registrarse';
    var href = this.state.willSignIn ? '/login' : '/signup';

    return (
      <AppBar
        title="RankingTM"
        showMenuIconButton={false}>
        <Link to="/" onClick={this.goHome}
        className="hideMobile">
          <IconButton
            iconClassName="material-icons iconButton"
            style={iconStyle}
            tooltip="Pagina inicial"
            touch={true}>home</IconButton>
        </Link>

        <Link to={href}
        onClick={this.changeWillSignIn}>
          <FlatButton
            label={text}
            className="hideMobile"
            style={buttonStyle}>
          </FlatButton>
        </Link>

        <IconMenu
          desktop={false}
          className="showMobile"
          iconButtonElement={<IconButton style={iconStyle} iconClassName="material-icons iconButton">more_vert</IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}>
          <Link to="/" onClick={this.goHome}><MenuItem primaryText="Home" /></Link>
          <Link to={href} onClick={this.changeWillSignIn}><MenuItem primaryText={text} /></Link>
        </IconMenu>

      </AppBar>
    );
  }
});
