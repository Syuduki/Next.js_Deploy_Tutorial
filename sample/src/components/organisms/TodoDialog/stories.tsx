import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TodoDialog } from '.';
import { InputForm } from '../InputForm';
import { action } from '@storybook/addon-actions';

import { Todo } from '../../../types/Todo';

export default {
  title: 'Organisms/TodoDialog',
  component: TodoDialog,
} as ComponentMeta<typeof TodoDialog>;

const TMP_INPUT_FROM: React.FC = () => {
  const [todo, setTodo] = React.useState<Todo>({
    id: 0,
    title: 'reactプロジェクト　作成',
    contents: '今日中に作成する',
    deadline: '2020/05/15',
    complete: false,
  });

  return <InputForm todo={todo} setTodo={setTodo} />;
};

const Template: ComponentStory<typeof TodoDialog> = (args) => (
  <TodoDialog {...args} inputForm={<TMP_INPUT_FROM />} />
);

export const todoDialog = Template.bind({});
todoDialog.args = {
  open: false,
  onClickButton: action('click'),
};
