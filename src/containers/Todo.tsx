'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { todoActionCreator } from '../actions/todoActions';
import TodoComponents from '../components/TodoComponents';

import { IRootState } from './../stores';
import { ITodos } from '../stores/todoStore';
import { ICreateTodoData } from '../types'

// ReduxのStoreをReactのContainerのPropsに変換するinterfaceを定義
interface IStateToProps {
  todos: ITodos[];
  loading: boolean;
}

// ReduxのDispatchをPropsに変換するinterfaceを定義
// メンバにはどのアクションを実行するのかを定義する
interface IDispatchToProps {
  requestFetch: () => void;
  requestAdd: (todo: string) => void;
}

type IProps = IStateToProps & IDispatchToProps;

class Todo extends React.Component<IProps, {}> {  
  constructor(props: IProps){
    super(props);
  }

  public componentDidMount() {
    this.props.requestFetch();
  }

  private onClickAddButton = (todo: ICreateTodoData): void => {
    const { requestAdd } = this.props;
    requestAdd(todo);
  }

  public render(): JSX.Element {
    const { todos, loading } = this.props;
    if (!loading) {
      return (
        <TodoComponents 
          todos={todos}
          onClickAddButton={this.onClickAddButton}
        />
      )
    } else {
      return <div>LOADING</div>
    }
  }
}

const mapStateToProps = (state: IRootState): IStateToProps => {
  const { todoState } = state;
  return {
    todos: todoState.todos,
    loading: todoState.loading
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): IDispatchToProps => {
  return {
    requestFetch: () => {
      dispatch(todoActionCreator.requestFetchTodoAction());
    },
    requestAdd: (todo) => {
      dispatch(todoActionCreator.requestAddTodoAction(todo));
    }
  }
}

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
