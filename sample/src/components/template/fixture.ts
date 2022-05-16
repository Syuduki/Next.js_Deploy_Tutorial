import * as types from '../../types/Todo';

export const MOCK_TODOLIST: types.Todo[] = [
  {
    id: 0,
    title: 'reactプロジェクト　作成',
    contents: '今日中に作成する',
    deadline: '2020/05/15',
    complete: false,
  },
  {
    id: 1,
    title: 'Laravelプロジェクト　作成',
    contents: '明日中に作成する',
    deadline: '2020/05/15',
    complete: false,
  },
];

export const MOCK_TODO: types.Todo = {
  id: 1,
  title: 'Laravelプロジェクト　作成',
  contents: '明日中に作成する',
  deadline: '2020/05/15',
  complete: false,
};
