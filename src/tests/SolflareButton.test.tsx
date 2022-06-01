/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { SolflareButton } from '../components';

describe('PhantomButton', () => {
  test('rendered button', () => {
    render(<SolflareButton setPublicKey={() => {}}/>);
    expect(screen.getByRole('button'));
  });
});
