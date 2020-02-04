'use strict';

import * as React from 'react';

import { ITodos } from '../stores/TodoStore';
import { ICreateTodoData } from '../types'

interface IProps {
  todos: ITodos[];
  onClickAddButton: (data: ICreateTodoData) => void;
}

interface IState {
  [key: string]: string
}

// tslint:disable:jsx-no-lambda
export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    
    this.state = {
      title: '',
      description: '',
    }
  };

  private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  };

  private onClickAddButton = () => {
    const { onClickAddButton } = this.props;
    const { title, description } = this.state;
    onClickAddButton({ title, description });
    this.setState({
      title: '',
      description: ''
    })
  };

  public render() {
    const { todos } = this.props;
    const { title, description } = this.state;

    return(
      <div style={{ width: '500px', margin: '0 auto'}}>
        <h1>TODO LIST</h1>
        <input type="text" name="title" value={title} onChange={this.onTextChange} />
        <input type="text" name="description" value={description} onChange={this.onTextChange} />
        <button onClick={this.onClickAddButton}>Add Todo</button>
        
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              {todo.description}
            </li>
          ))}
        </ul>
      </div>
    )
  };
}
