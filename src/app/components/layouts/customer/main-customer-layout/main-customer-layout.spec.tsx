import MainCustomerLayout from './index';
import { render } from '@lib/tests';

describe('MainCustomerLayout Component', () => {
  it('should render', () => {
    const { container } = render(
      <MainCustomerLayout/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<MainCustomerLayout>
      <div>Test</div>
    </MainCustomerLayout>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<MainCustomerLayout className="test">Test</MainCustomerLayout>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
