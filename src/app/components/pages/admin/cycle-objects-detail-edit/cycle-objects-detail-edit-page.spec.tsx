import CycleObjectsDetailEditPage from './cycle-objects-detail-edit-page';
import { render } from '@lib/tests';

describe('CycleObjectsDetailEditPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <CycleObjectsDetailEditPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<CycleObjectsDetailEditPage className="test"></CycleObjectsDetailEditPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
