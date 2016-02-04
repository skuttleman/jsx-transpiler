"use strict";

var HelloMessage = React.createClass({
  displayName: "HelloMessage",

  render: function render() {
    return React.createElement(
      "div",
      { "class": "my-class" },
      React.createElement(
        "p",
        null,
        "Hello, ",
        this.props.name,
        "."
      ),
      React.createElement(
        "p",
        null,
        "It is a pleasure to make your aquaintenance"
      )
    );
  }
});

var mountNode = $('body')[0];

ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), mountNode);