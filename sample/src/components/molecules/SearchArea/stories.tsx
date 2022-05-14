import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SearchArea } from '.';

export default {
  title: 'Molecules/SearchArea',
  component: SearchArea,
} as ComponentMeta<typeof SearchArea>;

const Template: ComponentStory<typeof SearchArea> = (args) => (
  <SearchArea {...args} />
);

export const searchArea = Template.bind({});
searchArea.args = {
  searchWord: '',
  onClickSearch: action('click'),
};
