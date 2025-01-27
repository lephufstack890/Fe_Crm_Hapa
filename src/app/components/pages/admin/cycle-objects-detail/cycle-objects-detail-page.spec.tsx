import CycleObjectsDetailPage from './cycle-objects-detail-page';
import { render } from '@lib/tests';

describe('CycleObjectsDetailPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <CycleObjectsDetailPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<CycleObjectsDetailPage className="test"></CycleObjectsDetailPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
