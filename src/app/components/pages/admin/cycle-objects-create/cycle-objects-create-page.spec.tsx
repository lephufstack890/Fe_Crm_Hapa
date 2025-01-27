import CycleObjectsCreatePage from './cycle-objects-create-page';
import { render } from '@lib/tests';

describe('CycleObjectsCreatePage Component', () => {
  it('should render', () => {
    const { container } = render(
      <CycleObjectsCreatePage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<CycleObjectsCreatePage className="test"></CycleObjectsCreatePage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
