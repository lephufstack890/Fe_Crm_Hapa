import FilterReplacementSchedulePage from './filter-replacement-schedule-page';
import { render } from '@lib/tests';

describe('FilterReplacementSchedulePage Component', () => {
  it('should render', () => {
    const { container } = render(
      <FilterReplacementSchedulePage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<FilterReplacementSchedulePage className="test"></FilterReplacementSchedulePage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
