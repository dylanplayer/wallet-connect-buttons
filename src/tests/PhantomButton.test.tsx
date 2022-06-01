/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { PhantomButton } from '../components';

describe('PhantomButton', () => {
  test('rendered button', () => {
    render(<PhantomButton setPublicKey={() => {}}/>);
    expect(screen.getByRole('button'));
  });
});
