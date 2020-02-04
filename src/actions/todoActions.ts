// reduxで定義されているAction interfaceだけimport
import { Action } from 'redux';

import { ITodos } from '../stores/TodoStore';
import { ICreateTodoData } from '../types'

// reduxのActionとして判別するための識別子をenumとして定義
export enum TodoActionType {
  FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_FAIL = 'FETCH_TODO_FAIL',
  ADD_TODO_REQUEST = 'ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  ADD_TODO_FAIL = 'ADD_TODO_FAIL',
}

export interface IRequestFetchTodoAction extends Action {
  type: TodoActionType.FETCH_TODO_REQUEST;
}
export interface ISuccessFetchTodoAction extends Action {
  type: TodoActionType.FETCH_TODO_SUCCESS;
  payload: {
    todos: ITodos[]
  }
}
export interface IFailFetchTodoAction extends Action {
  type: TodoActionType.FETCH_TODO_FAIL;
  error: {
    message: string
  };
}

export interface IRequestAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO_REQUEST;
  payload: {
    todo: ICreateTodoData
  };
}

export interface ISuccessAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO_SUCCESS;
  payload: {
    todos: ITodos[]
  };
}

export interface IFailAddTodoAction extends Action {
  type: TodoActionType.ADD_TODO_FAIL;
  error: {
    message: string
  };
}

// Actionを表現したinterfaceを一つの型として取り扱うためにTodoAction型を定義
export type TodoAction = 
  IRequestFetchTodoAction |
  ISuccessFetchTodoAction |
  IFailFetchTodoAction |
  IRequestAddTodoAction |
  ISuccessAddTodoAction |
  IFailAddTodoAction;

// 定義したActionのinterfaceを作成するCreatorのinterfaceを定義
export interface ITodoActionCreator {
  requestFetchTodoAction(): IRequestFetchTodoAction;
  successFetchTodoAction(todos: ITodos[]): ISuccessFetchTodoAction;
  failFetchTodoAction(error: { message: string }): IFailFetchTodoAction;
  requestAddTodoAction(todo: string): IRequestAddTodoAction;
  successAddTodoAction(todos: ITodos[]): ISuccessAddTodoAction;
  failAddTodoAction(error: { message: string }): IFailAddTodoAction;
}

class TodoActionCreator implements ITodoActionCreator {
  public requestAddTodoAction = (todo: ICreateTodoData): IRequestAddTodoAction => {
    return {
      type: TodoActionType.ADD_TODO_REQUEST,
      payload: {
        todo
      }
    }
  }

  public successAddTodoAction = (todos: ITodos[]): ISuccessAddTodoAction => {
    return {
      type: TodoActionType.ADD_TODO_SUCCESS,
      payload: {
        todos
      }
    }
  }

  public failAddTodoAction = (message): IFailAddTodoAction => {
    return {
      type: TodoActionType.ADD_TODO_FAIL,
      error: {
        message
      }
    }
  }

  public requestFetchTodoAction = (): IRequestFetchTodoAction => {
    return {
      type: TodoActionType.FETCH_TODO_REQUEST
    }
  }

  public successFetchTodoAction = (todos: ITodos[]): ISuccessFetchTodoAction => {
    return {
      type: TodoActionType.FETCH_TODO_SUCCESS,
      payload: {
        todos
      }
    }
  }

  public failFetchTodoAction = (message): IFailFetchTodoAction => {
    return {
      type: TodoActionType.FETCH_TODO_FAIL,
      error: {
        message
      }
    }
  }
}

// Creatorのインスタンスを作成
export const todoActionCreator: ITodoActionCreator = new TodoActionCreator();
