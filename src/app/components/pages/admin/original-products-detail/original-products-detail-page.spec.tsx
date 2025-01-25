import OriginalProductsDetailPage from './original-products-detail-page';
import { render } from '@lib/tests';

describe('OriginalProductsDetailPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <OriginalProductsDetailPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<OriginalProductsDetailPage className="test"></OriginalProductsDetailPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
