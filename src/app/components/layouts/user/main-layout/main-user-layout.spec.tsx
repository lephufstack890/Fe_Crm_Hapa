import MainUserLayout from './index';
import { render } from '@lib/tests';

describe('MainUserLayout Component', () => {
  it('should render', () => {
    const { container } = render(
      <MainUserLayout/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<MainUserLayout>
      <div>Test</div>
    </MainUserLayout>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<MainUserLayout className="test">Test</MainUserLayout>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
