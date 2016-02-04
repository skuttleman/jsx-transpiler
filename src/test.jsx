var HelloMessage = React.createClass({
  render: function() {
    return (
      <div class="my-class">
        <p>Hello, {this.props.name}.</p>
        <p>It is a pleasure to make your aquaintenance</p>
      </div>
    );
  }
});

var mountNode = $('body')[0];

ReactDOM.render(<HelloMessage name="John" />, mountNode);
