import React from "react";
import "../assets/styles/scss/index.scss";

class Focus extends React.Component {
  inputRef = React.createRef;

  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      isEditing: true
    };
  }

  handleInputChange = event => {
    this.setState({ answer: event.target.value });
  };

  onClickEnter = e => {
    if (e.key == "Enter") {
      e.preventDefault();
      this.setState({ isEditing: false });
    }
  };

  render() {
    return (
      <div className="feature__add-focus">
        <form className="add-focus__form">
          <label for="focus-input">What's your main focus for today?</label>
          {this.state.isEditing ? (
            <input
              onKeyPress={this.onClickEnter}
              onChange={this.handleInputChange}
              value={this.state.answer}
              type="text"
              id="focus-input"
              placeholder="Type your focus here..."
            />
          ) : (
            <p className="answer">{this.state.answer}</p>
          )}
        </form>
      </div>
    );
  }
}

export default Focus;
