import { Reducer } from 'redux';

import { IAddTodoAction, TodoAction, TodoActionType } from '../actions/todoActions';
import { ITodoState } from '../stores/todoStore';

//IRootStateの初期データを作成
const initTodoState : ITodoState = {
  todos: []
}

//Todoで発生するactionに対してReduxのStateを返すReducerを作成
const todoReducer: Reducer<ITodoState> = (
  state: ITodoState = initTodoState,
  action: TodoAction
): ITodoState => {
  //関数の引数として渡されて来たactionのtypeを見てReduxのStateを返す
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      const addTodoAction: IAddTodoAction = action;
      // ADD_TODOの場合はactionのpayloadに新しいtodoが詰められているので
      // それを取り出してtodosに追加して新しいstateとして返す
      return {
        ...state,
        todos: state.todos.concat([addTodoAction.payload.todo])
      }

    default:
      return state
  }
}

export default todoReducer;
