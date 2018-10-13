import React, { Component } from "react";

const TodoItem = ({list}) => {
  return (
    <div className='todo-text'>
      <div className='todo-item'>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <span className='todo-item-icon'>{index}</span>
              <span className='todo-item-text'>{item.text}</span>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      view: false,
      list: [
        {
          checked: false,
          text: ''
        }
      ]
    };
    this.handleViewList = this.handleViewList.bind(this)
    this.handleAddList = this.handleAddList.bind(this)
  }

  handleViewList() {
    this.setState({view: !this.state.view})
  }

  handleAddList() {
    this.setState({active: !this.state.active})
    console.log('active', this.state.active)
  }

  componentDidMount() {
    this.setState({
      list: [
        {
          checked: false,
          text: 'todo for the day'
        },
        {
          checked: false,
          text: 'todo for the tomorrow'
        },
        {
          checked: true,
          text: 'todo for the day after tomorrow'
        }
      ]
    })
  }

  render() {
    const todofieldClass = this.state.view ? 'todo-field' : 'todo-field hidden'
    return (
      <div>
        <div className={todofieldClass}>
          <TodoItem list={this.state.list} />
        </div>
        <div className='todo'>
          <button className='btn-todo' onClick={this.handleViewList}>To Do</button>
        </div>
      </div>
    );
  }
}

export default Todolist;
