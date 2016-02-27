const {
  TextField,
  RaisedButton
} = mui;

const style = {
  margin: 12,
  float: "right"
};

SignUp = React.createClass({
  render() {
    return (
      <div className="forma outer">
        <div className="logo"></div>
        <h1 className="title">Ranking</h1>
        <div className="subtitle">Ingrese sus datos</div>
        <TextField
          floatingLabelText="Nombre"
          fullWidth={true}
          />
        <br/>
        <TextField
          floatingLabelText="Apellido"
          fullWidth={true}
          />
        <br/>
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
          <RaisedButton label="REGISTRARSE" primary={true} style={style} />
        </div>
      </div>
    );
  }
});
