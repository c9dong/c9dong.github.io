var NavbarHeader = React.createClass({
  render: function() {
    return (
      <div className='navbarHeader'>
        {this.prop.title}
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(NavbarHeader, null),
  $('body')
);
