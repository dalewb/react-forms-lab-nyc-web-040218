import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      lines: [],
      textInput: '',
      enterNum: 0,
    };
  }

  verifySentence = () => {
    let sentence = this.state.textInput
    let wordArray = sentence.split(' ').filter(el => el.length > 0)
    if (this.state.lines.length === 0) {
      if (wordArray.length === 5) {
        let newLines = [...this.state.lines, wordArray.join(' ')]
        this.setState({
          lines: newLines,
          textInput: ''
        }, () => {console.log(this.state.lines)})
      } else {
        console.log("Wrong number of words")
      }
    } else if (this.state.lines.length === 1) {
      if (wordArray.length === 3) {
        let newLines = [...this.state.lines, wordArray.join(' ')]
        this.setState({
          lines: newLines,
          textInput: ''
        }, () => {console.log(this.state.lines)})
      } else {
        console.log("Wrong number of words")
      }
    } else if (this.state.lines.length === 2) {
      if (wordArray.length === 5) {
        let newLines = [...this.state.lines, wordArray.join(' ')]
        this.setState({
          lines: newLines,
          textInput: ''
        }, () => {console.log(this.state.lines)})
      } else {
        console.log("Wrong number of words")
      }
    } else {
      console.log('last error')
    }
  }

  handleChange = (e) => {
    this.setState({
      textInput: e.target.value
    }, () => {console.log(this.state.textInput)})
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.verifySentence()
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.textInput}/>
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
