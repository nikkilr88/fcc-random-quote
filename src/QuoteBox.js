import React from 'react';

class QuoteBox extends React.Component {
  render() {
    return (
      <div className="quoteBox">
        <span id="quoteTxt" dangerouslySetInnerHTML={{ __html: this.props.quote }} />
        <span id="author">— {this.props.author} </span>
      </div>
    );
  }
}

export default QuoteBox;
