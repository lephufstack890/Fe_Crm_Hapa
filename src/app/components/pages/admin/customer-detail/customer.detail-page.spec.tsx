import CustomerDetailPage from './customer-detail-page';
import { render } from '@lib/tests';

describe('CustomerDetailPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <CustomerDetailPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<CustomerDetailPage className="test"></CustomerDetailPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
