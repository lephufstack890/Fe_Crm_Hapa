import AppSidebar from './index';
import { render } from '@lib/tests';

describe('AppSidebar Component', () => {
  it('should render', () => {
    const { container } = render(
      <AppSidebar/>);
    expect(container).toBeTruthy();
  });
  it('should render with children and className', () => {
    const { container } = render(<AppSidebar className="test"></AppSidebar>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
