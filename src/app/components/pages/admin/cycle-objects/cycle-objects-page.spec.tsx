import CycleObjectsPage from './cycle-objects-page';
import { render } from '@lib/tests';

describe('CycleObjectsPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <CycleObjectsPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<CycleObjectsPage className="test"></CycleObjectsPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
