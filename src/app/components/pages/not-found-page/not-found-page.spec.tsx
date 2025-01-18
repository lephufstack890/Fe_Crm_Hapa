import NotFoundPage from './not-found-page';
import { render } from '@lib/tests';

describe('NotFoundPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <NotFoundPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<NotFoundPage className="test"></NotFoundPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
