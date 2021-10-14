class Hellochild extends React.Component {
  render() {
    return <p>Hello Child {this.props.name}</p>;
  }
}

Hellochild.propTypes = {
  name: PropTypes.string,
};
class Clock extends React.Component {
  utc() {
    let now = new Date();
    let timezoneOffset = now.getTimezoneOffset();
    let utc = now.getTime() + timezoneOffset * 60 * 1000;
    return utc;
  }
  render() {
    return (
      <div>
        <p>
          {new Date(
            this.utc() + this.props.timezone * 60 * 60 * 1000
          ).toString()}
        </p>
        {this.props.children}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>World clock</h1>
        <Clock timezone={7} />
        <Clock timezone={-4}>
          <Hellochild />
        </Clock>
        <Hellochild name={123}></Hellochild>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("App"));
