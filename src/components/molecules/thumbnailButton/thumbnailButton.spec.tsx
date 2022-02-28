import { fireEvent, render } from '@testing-library/react';
import { IMAGE_TYPE } from '../../../consts';
import { ThumbnailButton } from './thumbnailButton';

const text: string = 'Pikachu';
const thumbnailSource: string = './pikachu.png';
const mockHandleOnClick: () => void = jest.fn();

describe('thumbnailButton', () => {
  it('should render properly', () => {
    const { getByText, container } = render(
      <ThumbnailButton
        text={text}
        thumbnailSource={thumbnailSource}
        handleOnClick={mockHandleOnClick}
      />
    );
    expect(getByText(text)).toBeInTheDocument();
    expect(container.getElementsByClassName(IMAGE_TYPE.THUMBNAIL)[0]).toHaveAttribute(
      'src',
      thumbnailSource
    );
  });
  it('should be enabled', () => {
    const { getByText } = render(
      <ThumbnailButton
        text={text}
        thumbnailSource={thumbnailSource}
        handleOnClick={mockHandleOnClick}
      />
    );
    fireEvent.click(getByText(text));
    expect(mockHandleOnClick).toHaveBeenCalled();
  });
});
