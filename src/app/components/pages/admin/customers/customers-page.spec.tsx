import CustomersPage from './customers-page';
import { render } from '@lib/tests';

describe('CustomersPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <CustomersPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<CustomersPage className="test"></CustomersPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
