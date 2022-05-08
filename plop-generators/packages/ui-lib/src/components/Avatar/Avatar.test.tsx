import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <Avatar
        name="Paul Silva"
        photo="https://images.unsplash.com/photo-1568585105565-e372998a195d?w=256&h=256&fit=crop&crop=entropy"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
