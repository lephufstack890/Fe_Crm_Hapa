import OriginalProductsDetailEditPage from './original-products-detail-edit-page';
import { render } from '@lib/tests';

describe('OriginalProductsDetailEditPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <OriginalProductsDetailEditPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<OriginalProductsDetailEditPage className="test"></OriginalProductsDetailEditPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
