const {
  GridList,
  GridTile,
  IconButton
} = mui;

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginBottom: 24,
  },
};

Rankings = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function () {
    return {
      windowWidth: window.innerWidth
    };
  },
  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  getMeteorData() {
    return {
      players: Players.find({}, { sort: { score: -1, name: 1 } }).fetch(),
      selectedPlayer: Players.findOne(this.state.selectedPlayerId)
    }
  },
  render() {
    var colNumber = 5;

    if (this.state.windowWidth < 950) {
      colNumber = 4;
      if (this.state.windowWidth < 760) {
        colNumber = 3;
        if (this.state.windowWidth < 570) {
          colNumber = 2;
          if (this.state.windowWidth < 310) {
            colNumber = 1;
          }
        }
      }
    }

    return (
      <div style={styles.root} className="outer-lg">
        <GridList
          cellHeight={200}
          cols={colNumber}
          style={styles.gridList}
          >
          {this.data.players.map(player => (
            <GridTile
              key={player._id}
              title={player.name}
              subtitle="Subtitulo"
              actionIcon={<IconButton></IconButton>}
              >
              <img src={'/' + player.name + '.png'} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
});
