import { combineReducers, Reducer } from 'redux';
import { IRootState } from '../stores'
import todoReducer from './todoReducer';

// 全てを集約したReducerを作成
const reducers: Reducer<IRootState> = combineReducers({
  todoState: todoReducer
})

export default reducers;
