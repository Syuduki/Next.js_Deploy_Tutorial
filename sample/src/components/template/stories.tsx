import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TodoTemplate } from '.';
import { SearchArea } from '../molecules/SearchArea';
import { TableArea } from '../molecules/TableArea';
import { InputForm } from '../organisms/InputForm';
import { TodoDialog } from '../organisms/TodoDialog';

import { action } from '@storybook/addon-actions';

import * as types from '../../types/Todo';
import * as fixture from './fixture';

export default {
  title: 'Template/TodoTemplate',
  component: TodoTemplate,
} as ComponentMeta<typeof TodoTemplate>;

const TMP_REACT_NODE: React.FC = () => {
  const [searchword, setSearchword] = React.useState<string>('');

  const [todo, setTodo] = React.useState<types.Todo>(fixture.MOCK_TODO);

  const [open, setOpen] = React.useState<boolean>(false);

  const onClickRow = () => {
    setOpen(true);
  };

  const onClickButton = () => {
    setOpen(false);
  };

  return (
    <>
      <TodoTemplate
        searchArea={
          <SearchArea
            searchWord={searchword}
            setSearchword={setSearchword}
            onClickSearch={action('change')}
          />
        }
        tableArea={
          <TableArea todoList={fixture.MOCK_TODOLIST} onClickRow={onClickRow} />
        }
      />
      <TodoDialog
        inputForm={<InputForm todo={todo} setTodo={setTodo} />}
        open={open}
        onClickButton={onClickButton}
      />
    </>
  );
};

const Template: ComponentStory<typeof TodoTemplate> = (args) => (
  <TMP_REACT_NODE />
);

export const todoTemplate = Template.bind({});
