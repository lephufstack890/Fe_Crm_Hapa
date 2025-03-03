import FiltersPage from './filters-page';
import { render } from '@lib/tests';

describe('FiltersPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <FiltersPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<FiltersPage className="test"></FiltersPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
