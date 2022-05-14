import { Todo } from '../../../types/todo';

export interface Props {
  todoList: Todo[];
  onClickRow: (id: number) => void;
}
