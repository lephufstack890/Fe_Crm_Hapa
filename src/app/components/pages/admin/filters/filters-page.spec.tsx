import FiltersPagePage from './filters-page';
import { render } from '@lib/tests';

describe('FiltersPagePage Component', () => {
  it('should render', () => {
    const { container } = render(
      <FiltersPagePage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<FiltersPagePage className="test"></FiltersPagePage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
