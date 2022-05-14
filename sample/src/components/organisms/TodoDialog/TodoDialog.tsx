import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import * as types from './types';

export const TodoDialog: React.FC<types.Props> = ({ ...props }) => {
  return (
    <div>
      <Dialog open={props.open}>
        <DialogTitle>Todo編集</DialogTitle>
        <DialogContent>{props.inputForm}</DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => props.onClickButton('delete')}
            style={{ background: '#ff0000' }}
          >
            削除
          </Button>
          <Button
            variant="contained"
            onClick={() => props.onClickButton('save')}
          >
            登録
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
