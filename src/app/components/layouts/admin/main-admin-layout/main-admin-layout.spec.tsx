import MainAdminLayout from './index';
import { render } from '@lib/tests';

describe('MainAdminLayout Component', () => {
  it('should render', () => {
    const { container } = render(
      <MainAdminLayout/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<MainAdminLayout>
      <div>Test</div>
    </MainAdminLayout>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<MainAdminLayout className="test">Test</MainAdminLayout>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
