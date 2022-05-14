import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputForm } from '.';

export default {
  title: 'Organisms/InputForm',
  component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
  <InputForm {...args} />
);

export const inputForm = Template.bind({});
inputForm.args = {
  todo: {
    id: 0,
    title: 'reactプロジェクト　作成',
    contents: '今日中に作成する',
    deadLine: '2020/05/15',
    complete: false,
  },
};
