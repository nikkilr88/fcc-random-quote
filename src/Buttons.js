import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button id="btn" onClick={this.props.onClick}>Random Quote</button>
        <button id="btnMobile" onClick={this.props.onClick}>Rand</button>
      </div>
    );
  }
}

export default Buttons;