import * as React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

import * as types from './types';

export const InputForm: React.FC<types.Props> = ({ ...props }) => {
  return (
    <Stack spacing={2} justifyContent="flex-start" alignItems="flex-start">
      <TextField
        fullWidth
        id="title"
        label="タイトル"
        variant="standard"
        value={props.todo.title}
        onChange={(e) =>
          props.setTodo({ ...props.todo, title: e.target.value })
        }
      />
      <TextField
        fullWidth
        id="contents"
        label="内容"
        variant="standard"
        value={props.todo.contents}
        onChange={(e) =>
          props.setTodo({ ...props.todo, contents: e.target.value })
        }
      />
      <TextField
        fullWidth
        id="deadLine"
        label="日付"
        variant="standard"
        value={props.todo.deadLine}
        onChange={(e) =>
          props.setTodo({ ...props.todo, deadLine: e.target.value })
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={props.todo.complete}
            onChange={(e) =>
              props.setTodo({ ...props.todo, complete: e.target.checked })
            }
          />
        }
        label="完了"
        labelPlacement="start"
      />
    </Stack>
  );
};
