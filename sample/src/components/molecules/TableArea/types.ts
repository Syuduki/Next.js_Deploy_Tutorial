import { Todo } from '../../../types/Todo';

export interface Props {
  todoList: Todo[];
  onClickRow: (id: number) => void;
}
