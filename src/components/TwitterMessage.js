import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      message: ''
    };
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
      <h3>Characters Left: {this.props.maxChars - this.state.message.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
