import OrderPage from './order-page';
import { render } from '@lib/tests';

describe('OrderPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <OrderPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<OrderPage className="test"></OrderPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
