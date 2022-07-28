import { ReactQueryProvider } from '@multiverse/src/providers/react-query';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />, {
      wrapper: props => (
        <ReactQueryProvider state={null}>{props.children}</ReactQueryProvider>
      ),
    });
    expect(baseElement).toBeTruthy();
  });
});
