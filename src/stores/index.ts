import { ITodoState } from './todoStore';

// 全てのStateを集約したStateを定義
export interface IRootState {
  todoState: ITodoState
}
