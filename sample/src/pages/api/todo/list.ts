import type { NextApiRequest, NextApiResponse } from 'next';
import * as types from '../../../types/Todo';
import axios from 'axios';

// API のエントリポイント
export default function todoListApi(
  req: NextApiRequest,
  res: NextApiResponse<types.Todo[]>
): void {
  const id = req.query.id as string;
  axios
    .get('http://127.0.0.1:8000/todo/')
    .then((response) => {
      res.status(200).json(response.data.data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
}
