import React from 'react';

const testId = (Story) => (
  <div data-testid="root-test-id" style={{ maxWidth: '100%' }}>
    <Story />
  </div>
);

export default testId;
