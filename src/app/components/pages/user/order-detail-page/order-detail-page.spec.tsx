import OrderDetailPage from './order-detail-page';
import { render } from '@lib/tests';

describe('OrderDetailPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <OrderDetailPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<OrderDetailPage className="test"></OrderDetailPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
