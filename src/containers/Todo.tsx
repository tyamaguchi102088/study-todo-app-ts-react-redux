'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { todoActionCreator } from '../actions/todoActions';
import { IRootState } from './../stores';
import TodoComponents from '../components/TodoComponents';

// ReduxのStoreをReactのContainerのPropsに変換するinterfaceを定義
interface IStateToProps {
  todos: string[];
}

// ReduxのDispatchをPropsに変換するinterfaceを定義
// メンバにはどのアクションを実行するのかを定義する
interface IDispatchToProps {
  addTodo: (todo: string) => void;
}

type IProps = IStateToProps & IDispatchToProps;

class Todo extends React.Component<IProps, {}> {  
  constructor(props: IProps){
    super(props);
  }

  private onClickAddButton = (todo: string): void => {
    const { addTodo } = this.props;
    addTodo(todo);
  }

  public render(): JSX.Element {
    const { todos } = this.props;
    return (
      <TodoComponents 
        todos={todos}
        onClickAddButton={this.onClickAddButton}
      />
    )
  }
}

const mapStateToProps = (state: IRootState): IStateToProps => {
  const { todoState } = state;
  return {
    todos: todoState.todos
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => {
  return {
    addTodo: (todo: string) => {
      dispatch(todoActionCreator.addTodoAction(todo));
    }
  }
}

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Todo);