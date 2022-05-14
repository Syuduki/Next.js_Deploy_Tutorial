import React from 'react';

export interface Props {
  open: boolean;
  inputForm: React.ReactNode;
  onClickButton: (type: string) => void;
}
