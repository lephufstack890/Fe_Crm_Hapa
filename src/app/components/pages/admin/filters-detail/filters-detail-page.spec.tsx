import FiltersDetailPage from './filters-detail-page';
import { render } from '@lib/tests';

describe('FiltersDetailPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <FiltersDetailPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<FiltersDetailPage className="test"></FiltersDetailPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
