import React from 'react';
import { render } from '@testing-library/react';
import BodyContent from './BodyContent';

describe('BodyContent', () => {
  it('renders when mounted', () => {
    const { container } = render(<BodyContent />);
    expect(container).toMatchSnapshot();
  });
});
