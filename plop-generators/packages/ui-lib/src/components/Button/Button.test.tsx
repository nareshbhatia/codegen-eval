import { render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  test('variant="contained" renders correctly', () => {
    const { asFragment } = render(
      <div>
        <Button variant="contained" color="default">
          Submit
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary">
          Submit
        </Button>
        <Button variant="contained" disabled>
          Submit
        </Button>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('variant="outlined" renders correctly', () => {
    const { asFragment } = render(
      <div>
        <Button variant="outlined" color="default">
          Submit
        </Button>
        <Button variant="outlined" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="secondary">
          Submit
        </Button>
        <Button variant="outlined" disabled>
          Submit
        </Button>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('sizes render correctly', () => {
    const { asFragment } = render(
      <div>
        <Button size="small">Submit</Button>
        <Button size="medium">Submit</Button>
        <Button size="large">Submit</Button>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('class can be added via rootClass prop', () => {
    const { asFragment } = render(<Button rootClass="ml-2">Submit</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
