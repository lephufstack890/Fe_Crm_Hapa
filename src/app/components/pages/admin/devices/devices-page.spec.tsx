import DevicesPage from './devices-page';
import { render } from '@lib/tests';

describe('DevicesPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <DevicesPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<DevicesPage className="test"></DevicesPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
