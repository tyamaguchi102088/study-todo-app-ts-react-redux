export interface ITodos {
  id: number;
  done: boolean;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}


export interface ITodoState {
  todos: ITodos[];
  error: {
    message: string;
  }
  loading: boolean;
}
