import * as React from 'react';
import './button.scss';

export interface Props {
  handleOnClick: () => void;
  content: JSX.Element;
  disabled?: boolean;
}

export const Button = (props: Props): JSX.Element => (
  <button className="btn" disabled={props.disabled} onClick={() => props.handleOnClick()}>
    {props.content}
  </button>
);
