import * as React from 'react';
import * as types from './types';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

export const SearchArea: React.FC<types.Props> = ({ ...props }) => {
  return (
    <div style={{ width: '100%' }}>
      <Stack spacing={2} direction="row">
        <TextField
          id="SearchField"
          value={props.searchWord}
          onChange={(e) => props.setSearchword(e.target.value)}
          variant="standard"
        />
        <Button
          variant="contained"
          onClick={() => {
            props.onClickSearch();
          }}
          startIcon={<SearchIcon />}
        >
          検索
        </Button>
      </Stack>
    </div>
  );
};
