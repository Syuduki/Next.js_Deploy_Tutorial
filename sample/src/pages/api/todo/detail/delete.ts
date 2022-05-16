import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// API のエントリポイント
export default function todoDetailDeleteApi(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const id = parseInt(req.query.id as string);
  axios
    .delete(`http://127.0.0.1:8000/todo/detail/?id=${id}`)
    .then((response) => {
      res.status(200).json(response.data.data);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
}
