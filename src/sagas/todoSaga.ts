import { put, call } from 'redux-saga/effects';
import { todoActionCreator } from '../actions/todoActions';
import axios from 'axios';

const { 
  failFetchTodoAction,
  successFetchTodoAction,
  failAddTodoAction,
  successAddTodoAction
} = todoActionCreator;

//TODO: set base url in env
//TODO2: defined types for eafch function, variables, etc...
export function getTodos() {
  return axios({
    method: "get",
    url: "http://localhost:3000/todos"
  })
}

export function createTodos(payload) {
  const { title, description } = payload.todo;
  return axios({
    method: "post",
    url: `http://localhost:3000/todos`,
    data: {
      title,
      description
    }
  })
}

export function* fetchTodos() {
  const response = yield call(getTodos);
  if (response.data.status === 'ok')
    yield put(successFetchTodoAction(response.data.todos))
  else 
    yield put(failFetchTodoAction({message: "could't load todos"}))
}

export function* addTodos(data) {
  const response = yield call(createTodos, data.payload);
  if (response.data.status === 'ok')
    yield put(successAddTodoAction(response.data.todos))
  else
    yield put(failAddTodoAction({message: "could't add todos"}))
}
