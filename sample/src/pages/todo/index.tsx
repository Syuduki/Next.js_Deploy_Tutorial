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
    axios
      .get('api/todo/list')
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClickSearch = () => {
    axios
      .post('http://127.0.0.1:8000/todo/detail/', {
        searchword: searchword,
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickRow = (id: number) => {
    axios
      .get(`http://127.0.0.1:8000/todo/detail/?id=${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(true);
  };

  const onClickButton = (type: string) => {
    switch (type) {
      case 'save':
        axios
          .put('http://127.0.0.1:8000/todo/detail/', {
            todo: todo,
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        setOpen(false);
        break;
      case 'delete':
        axios
          .delete(`http://127.0.0.1:8000/todo/detail/?id=${todo.id}`, {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        setOpen(false);
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
