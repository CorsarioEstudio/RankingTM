const {
  TextField,
  RaisedButton,
  Link
} = mui;

const style = {
  margin: 12,
  float: "right"
};

Login = React.createClass({
  render() {
    return (
      <div className="forma outer">
        <div className="logo"></div>
        <h1 className="title">Ranking</h1>
        <div className="subtitle">Ingrese sus datos</div>
        <TextField
          floatingLabelText="Usuario"
          fullWidth={true}
          />
        <br/>
        <TextField
          floatingLabelText="Contraseña"
          type="password"
          fullWidth={true}
          />
        <br/>
        <br/>
        <div className="details">
          <RaisedButton label="INGRESAR" primary={true} style={style} />
        </div>
      </div>
    );
  }
});
