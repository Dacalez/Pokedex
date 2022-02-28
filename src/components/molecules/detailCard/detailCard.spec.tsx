import { render } from '@testing-library/react';
import { DetailCard } from './detailCard';

const title: string = '#7 Squirtle';
const labeledDetails: { [key: string]: string } = {
  type: 'water',
  weight: '3',
  height: '1'
};
const bottomText: string = 'Squirtle can learn a lot of moves';

describe('detailCard', () => {
  it('should render properly', () => {
    const { container, getByText } = render(
      <DetailCard title={title} labeledDetails={labeledDetails} bottomText={bottomText} />
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(container.getElementsByClassName('detail-card__labeled-row')).toHaveLength(
      Object.keys(labeledDetails).length
    );
    expect(getByText(bottomText));
  });
});
