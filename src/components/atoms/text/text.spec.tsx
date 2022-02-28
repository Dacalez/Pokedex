import { render } from '@testing-library/react';
import { TEXT_TYPE } from '../../../consts';
import { Text } from './text';

const textContent: string = 'Charmander';

describe('Text', () => {
  it('should render properly', () => {
    const { getByText } = render(<Text type={TEXT_TYPE.TITLE} content={textContent} />);
    const text: Element = getByText(textContent);
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass(`txt ${TEXT_TYPE.TITLE}`);
  });
});
