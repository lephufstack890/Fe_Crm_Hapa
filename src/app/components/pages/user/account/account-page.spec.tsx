import AccountPage from './account-page';
import { render } from '@lib/tests';

describe('AccountPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <AccountPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<AccountPage className="test"></AccountPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
