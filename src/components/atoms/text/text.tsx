import * as React from 'react';
import { TEXT_TYPE } from '../../../consts';
import './text.scss';

interface Props {
  type: TEXT_TYPE;
  content: string;
}

export const Text = (props: Props): JSX.Element => (
  <p className={`txt ${props.type}`}>{props.content}</p>
);
