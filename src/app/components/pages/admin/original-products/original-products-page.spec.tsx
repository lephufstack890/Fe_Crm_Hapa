import OriginalProductsPage from './original-products-page';
import { render } from '@lib/tests';

describe('OriginalProductsPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <OriginalProductsPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<OriginalProductsPage className="test"></OriginalProductsPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
