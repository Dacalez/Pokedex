import * as React from 'react';
import { Text } from '../../atoms';
import { TEXT_TYPE } from '../../../consts';

import './detailCard.scss';

interface Props {
  title: string;
  labeledDetails: { [key: string]: string };
  bottomText: string;
}

export const DetailCard = (props: Props): JSX.Element => (
  <div className="detail-card">
    <Text type={TEXT_TYPE.TITLE} content={props.title} />
    <div>
      {Object.keys(props.labeledDetails).map((key, idx) => (
        <div className="detail-card__labeled-row" key={idx}>
          <Text type={TEXT_TYPE.LABEL} content={key} />
          <Text type={TEXT_TYPE.TEXT} content={props.labeledDetails[key]} />
        </div>
      ))}
    </div>
    <Text type={TEXT_TYPE.TEXT} content={props.bottomText} />
  </div>
);
