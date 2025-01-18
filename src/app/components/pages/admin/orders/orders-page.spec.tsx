import OrdersPage from './orders-page';
import { render } from '@lib/tests';

describe('OrdersPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <OrdersPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<OrdersPage className="test"></OrdersPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
