import LoginsPage from './login-page';
import { render } from '@lib/tests';

describe('LoginsPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <LoginsPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<LoginsPage className="test"></LoginsPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
