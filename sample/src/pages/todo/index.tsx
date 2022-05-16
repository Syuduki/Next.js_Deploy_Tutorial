import * as React from 'react';
import { NextPage } from 'next';
import { TodoTemplate } from '../../components/template/TodoTemplate';
import { SearchArea } from '../../components/molecules/SearchArea';
import { TableArea } from '../../components/molecules/TableArea';
import { InputForm } from '../../components/organisms/InputForm';
import { TodoDialog } from '../../components/organisms/TodoDialog';
import * as types from '../../types/Todo';

import axios from 'axios';

const TodoPage: NextPage = () => {
  const [searchword, setSearchword] = React.useState<string>('');

  const [todo, setTodo] = React.useState<types.Todo>({
    id: 0,
    title: '',
    contents: '',
    deadline: '',
    complete: false,
  });

  const [todoList, setTodoList] = React.useState<types.Todo[]>([]);

  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    onClickSearch();
  }, []);

  const onClickSearch = () => {
    axios
      .get('api/todo/list')
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickRow = (id: number) => {
    axios
      .get(`api/todo/detail/data?id=${id}`)
      .then((response) => {
        setTodo(response.data);
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickButton = (type: string) => {
    switch (type) {
      case 'save':
        axios
          .put('api/todo/detail/update', {
            todo: todo,
          })
          .then((response) => {
            setOpen(false);
            onClickSearch();
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      case 'delete':
        axios
          .delete(`api/todo/detail/delete?id=${todo.id}`)
          .then((response) => {
            setOpen(false);
            onClickSearch();
          })
          .catch((error) => {
            console.log(error);
          });
        break;
    }
  };

  return (
    <>
      <TodoTemplate
        searchArea={
          <SearchArea
            searchWord={searchword}
            setSearchword={setSearchword}
            onClickSearch={onClickSearch}
          />
        }
        tableArea={
          <TableArea todoList={todoList} onClickRow={(id) => onClickRow(id)} />
        }
      />
      <TodoDialog
        inputForm={<InputForm todo={todo} setTodo={setTodo} />}
        open={open}
        onClickButton={(type) => onClickButton(type)}
      />
    </>
  );
};

export default TodoPage;
