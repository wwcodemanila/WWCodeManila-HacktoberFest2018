import React, { Component } from "react";
import axios from "axios";
import Focus from "./components/Focus";
import Todolist from "./components/Todolist.js"
import Greetings from "./components/Greetings.js"
import Background from "./components/Background";
import Hugot from "./components/Hugot.js";
import "./assets/styles/scss/index.scss"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      author_url: "",
      img: "",
      placeholder: "",
      post_url: "",
      imageLoaded: false
    };
  }

  componentDidMount() {
    axios.get("https://picsum.photos/list").then(response => {
      const data = response.data;
      const random = Math.floor(Math.random() * data.length);
      this.setState({
        author: data[random].author,
        author_url: data[random].author_url,
        img: `https://picsum.photos/1920?image=${data[random].id}`,
        placeholder: `https://picsum.photos/8?image=${data[random].id}`,
        post_url: data[random].post_url
      });
    });
  }

  handleImageLoader = () => {
    console.log("Image is loaded!");
    this.setState({
      imageLoaded: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <Background
          imgSrc={this.state.img}
          alt={this.state.post_url}
          placeholder={this.state.placeholder}
          handleImageLoader={this.handleImageLoader}
          imageLoaded={this.state.imageLoaded}
        />
        <Greetings />
        <Focus />
        <Hugot />
        <Todolist />
      </React.Fragment>
    );
  }
}

export default App;
