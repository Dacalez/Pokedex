import { fireEvent, render } from '@testing-library/react';
import { Button } from './button';

const contentText: string = 'Bulbasur';
const buttonContent: JSX.Element = <span>{contentText}</span>;
const mockHandleOnClick: () => void = jest.fn();

describe('Button', () => {
  it('should render properly', () => {
    const { getByText } = render(
      <Button content={buttonContent} handleOnClick={mockHandleOnClick} />
    );
    const button = getByText(contentText);
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockHandleOnClick).toHaveBeenCalled();
  });
  it('should be disabled according to props', () => {
    const { getByText } = render(
      <Button content={buttonContent} disabled={true} handleOnClick={mockHandleOnClick} />
    );
    const button = getByText(contentText);
    fireEvent.click(button);
    expect(mockHandleOnClick).not.toHaveBeenCalled();
  });
});
