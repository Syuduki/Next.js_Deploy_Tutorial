import * as React from 'react';
import * as types from './types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableArea: React.FC<types.Props> = ({ ...props }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="todo">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>タイトル</TableCell>
            <TableCell>日付</TableCell>
            <TableCell>完了</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todoList.map((todo) => (
            <TableRow
              key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => props.onClickRow(todo.id)}
              hover
            >
              <TableCell component="th">{todo.id}</TableCell>
              <TableCell component="th">{todo.title}</TableCell>
              <TableCell component="th">{todo.deadline}</TableCell>
              <TableCell component="th">{todo.complete}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
