import * as React from 'react';
import { IMAGE_TYPE } from '../../../consts';
import './image.scss';

export interface Props {
  type: IMAGE_TYPE;
  source: string;
}

export const Image = (props: Props): JSX.Element => (
  <img src={props.source} className={props.type} />
);
