import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
body {
  margin: 0;
  padding: 0;
}