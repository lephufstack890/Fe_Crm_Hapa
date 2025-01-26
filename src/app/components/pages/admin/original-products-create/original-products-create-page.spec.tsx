import OriginalProductsCreatePage from './original-products-create-page';
import { render } from '@lib/tests';

describe('OriginalProductsCreatePage Component', () => {
  it('should render', () => {
    const { container } = render(
      <OriginalProductsCreatePage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<OriginalProductsCreatePage className="test"></OriginalProductsCreatePage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
