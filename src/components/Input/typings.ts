import { ChangeHandler } from 'react-hook-form';

export type  { FC } from 'react';


export interface Props {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  label?: string;
  Icon?: any;
  type?: 'text' | 'password';
  name?: string;
  onBlur?: () => void; 
  onFocus?: () => void;
}