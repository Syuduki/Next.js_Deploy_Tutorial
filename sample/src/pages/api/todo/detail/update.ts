import type { NextApiRequest, NextApiResponse } from 'next';
import * as types from '../../../../types/Todo';
import axios from 'axios';

// API のエントリポイント
export default function todoDetailUpdateApi(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const todo = req.body.todo as types.Todo;
  axios
    .put('http://127.0.0.1:8000/todo/detail/', todo)
    .then((response) => {
      res.status(200).json(response.data.data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
}
