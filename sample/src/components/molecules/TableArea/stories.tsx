import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TableArea } from '.';

export default {
  title: 'Molecules/TableArea',
  component: TableArea,
} as ComponentMeta<typeof TableArea>;

const Template: ComponentStory<typeof TableArea> = (args) => (
  <TableArea {...args} />
);

export const tableArea = Template.bind({});
tableArea.args = {
  todoList: [
    {
      id: 0,
      title: 'reactプロジェクト　作成',
      contents: '今日中に作成する',
      deadline: '2020/05/15',
      complete: false,
    },
    {
      id: 1,
      title: 'Laravelプロジェクト　作成',
      contents: '明日中に作成する',
      deadline: '2020/05/15',
      complete: false,
    },
  ],
  onClickRow: action('click'),
};
