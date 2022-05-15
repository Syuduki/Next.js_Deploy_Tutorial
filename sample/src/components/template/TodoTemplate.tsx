import * as React from 'react';
import * as types from './types';
import Stack from '@mui/material/Stack';

export const TodoTemplate: React.FC<types.Props> = ({ ...props }) => {
  return (
    <Stack spacing={2}>
      <>{props.searchArea}</>
      <>{props.tableArea}</>
    </Stack>
  );
};
