import { Reducer } from 'redux';

import { 
  ISuccessAddTodoAction,
  IFailAddTodoAction,
  ISuccessFetchTodoAction,
  IFailFetchTodoAction,
  TodoAction,
  TodoActionType
} from '../actions/todoActions';
import { ITodoState } from '../stores/todoStore';

//IRootStateの初期データを作成
const initTodoState : ITodoState = {
  todos: [],
  error: {
    message: ""
  },
  loading: false
}

//Todoで発生するactionに対してReduxのStateを返すReducerを作成
const todoReducer: Reducer<ITodoState> = (
  state: ITodoState = initTodoState,
  action: TodoAction
): ITodoState => {
  //関数の引数として渡されて来たactionのtypeを見てReduxのStateを返す
  switch (action.type) {
    case TodoActionType.FETCH_TODO_SUCCESS:
      const successFetchTodoAction: ISuccessFetchTodoAction = action;
      return {
        ...state,
        todos: successFetchTodoAction.payload.todos,
        loading: false
      }

    case TodoActionType.FETCH_TODO_FAIL:
      const failFetchTodoAction: IFailFetchTodoAction = action;

      return {
        ...state,
        todos: [],
        error: {
          message: failFetchTodoAction.error.message
        },
        loading: false
      }

    case TodoActionType.ADD_TODO_SUCCESS:
      const successAddTodoAction: ISuccessAddTodoAction = action;
      return {
        ...state,
        todos: state.todos.concat(successAddTodoAction.payload.todos),
        loading: false
      }

    case TodoActionType.ADD_TODO_FAIL:
      const failAddTodoAction: IFailAddTodoAction = action;
      
      return {
        ...state,
        todos: [],
        error: {
          message: failAddTodoAction.error.message
        },
        loading: false
      }

    default:
      return state
  }
}

export default todoReducer;
