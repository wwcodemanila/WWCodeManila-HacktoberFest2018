import React, { Component } from "react";
import axios from "axios";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      view: false,
      todo: []
    };
    this.handleViewList = this.handleViewList.bind(this)
    this.handleAddList = this.handleAddList.bind(this)
  }

  handleViewList() {
    this.setState({view: !this.state.view})
    console.log('view', this.state.view)
  }

  handleAddList() {
    this.setState({active: !this.state.active})
    console.log('active', this.state.active)
  }

  componentDidMount() {

  }

  render() {
    return (
      <button onClick={this.handleViewList}>To Do</button>
    );
  }
}

export default Todolist;
