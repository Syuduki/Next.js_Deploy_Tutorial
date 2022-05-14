import * as React from 'react';

export interface Props {
  searchWord: string;
  setSearchword: React.Dispatch<React.SetStateAction<string>>;
  onClickSearch: () => void;
}
