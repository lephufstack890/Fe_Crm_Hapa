import FiltersCreateAndEditPage from './filters-create-and-edit-page';
import { render } from '@lib/tests';

describe('FiltersCreateAndEditPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <FiltersCreateAndEditPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<FiltersCreateAndEditPage className="test"></FiltersCreateAndEditPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
