import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button id="btn" onClick={this.props.onClick}>Random Quote</button>
        <button id="btnMobile" onClick={this.props.onClick}>
          <i className="fa fa-random"></i>
        </button>
      </div>
    );
  }
}

export default Buttons;