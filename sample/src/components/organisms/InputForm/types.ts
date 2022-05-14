import { Todo } from '../../../types/Todo';

export interface Props {
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
}
