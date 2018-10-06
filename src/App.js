import React, { Component } from "react";
import axios from "axios";
import Greetings from "./components/Greetings.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      author_url: "",
      img: "",
      post_url: ""
    };
  }

  componentDidMount() {
    axios.get("https://picsum.photos/list").then(response => {
      const data = response.data;
      const random = Math.floor(Math.random() * data.length);
      this.setState({
        author: data[random].author,
        author_url: data[random].author_url,
        img: `https://picsum.photos/1080/720?image=${data[random].id}`,
        post_url: data[random].post_url
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="background">
          <img
            src={this.state.img}
            alt={this.state.post_url}
            width="100%"
            height="100%"
          />
        </div>
        <Greetings  />
      </React.Fragment>
    );
  }
}

export default App;
