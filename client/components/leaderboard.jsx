const {
  List,
  ListItem,
  RaisedButton,
  Divider,
  Avatar
} = mui;

Leaderboard = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function () {
    return {
      selectedPlayerId: null
    };
  },
  getMeteorData() {
    return {
      players: Players.find({}, { sort: { score: -1, name: 1 } }).fetch(),
      selectedPlayer: Players.findOne(this.state.selectedPlayerId)
    }
  },
  selectPlayer(playerId) {
    this.setState({
      selectedPlayerId: playerId
    });
  },
  addPointsToPlayer(playerId) {
    Players.update(playerId, {$inc: {score: 5}});
  },
  getBottomBar() {
    return this.state.selectedPlayerId
      ? (
        <div className="details">
          <div className="name">{this.data.selectedPlayer.name}</div>
          <RaisedButton
            onClick={this.addPointsToPlayer.bind(
              this, this.state.selectedPlayerId)}
            style={{float: "right"}}
            label="Add 5 points"
            primary={true}/>
        </div>
        )
      : <div className="message">Click a player to select</div>;
  },
  render() {
    return (
      <div className="outer">
        <List>
        {this.data.players.map((player) => {
          let style = {};

          if (this.props.selectedPlayerId === player._id) {
            style['backgroundColor'] = '#eee';
          }

          return [
            <ListItem key={player._id}
              primaryText={player.name}
              onClick={this.selectPlayer.bind(this, player._id)}
              leftAvatar={<Avatar src={'/' + player.name + '.png'}/>}
              secondaryText={'Current score: ' + player.score}
              style={style}/>,
            <Divider/>
          ];
        })}
        </List>
        {this.getBottomBar()}
      </div>
    );
  }
});
