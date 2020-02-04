import { all, takeLatest } from 'redux-saga/effects';
import { TodoActionType } from '../actions/todoActions'
import { fetchTodos, addTodos } from './todoSaga';

export const rootSaga = function* rootSaga() {
  yield all([
    takeLatest(TodoActionType.FETCH_TODO_REQUEST, fetchTodos),
    takeLatest(TodoActionType.ADD_TODO_REQUEST, addTodos)
  ]);
}
