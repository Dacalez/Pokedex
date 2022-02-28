import { render } from '@testing-library/react';
import { IMAGE_TYPE } from '../../../consts';
import { Image } from './image';

const sourceImage: string = './image.png';

describe('Image', () => {
  it('should render properly', () => {
    const { container } = render(<Image source={sourceImage} type={IMAGE_TYPE.THUMBNAIL} />);
    const image: Element = container.getElementsByClassName(IMAGE_TYPE.THUMBNAIL)[0];
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', sourceImage);
  });
});
