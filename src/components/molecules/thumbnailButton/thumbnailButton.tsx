import * as React from 'react';
import { IMAGE_TYPE, TEXT_TYPE } from '../../../consts';
import { Button, Text, Image } from '../../atoms';

export interface Props {
  text: string;
  thumbnailSource: string;
  handleOnClick: () => void;
}

export const ThumbnailButton = (props: Props): JSX.Element => {
  const { text, thumbnailSource, handleOnClick } = props;

  const renderButtonContent = (): JSX.Element => (
    <div className="btn__content">
      <Image type={IMAGE_TYPE.THUMBNAIL} source={thumbnailSource} />
      <Text type={TEXT_TYPE.TEXT} content={text} />
    </div>
  );

  return <Button disabled={false} handleOnClick={handleOnClick} content={renderButtonContent()} />;
};
