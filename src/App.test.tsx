import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import * as helpers from './helpers/chrome';

jest.mock('./helpers/chrome')

describe('App', () => {
  const resolveContent = helpers.resolveContent as jest.Mock

  test('renders a readout of the word count from the page', async () => {
    resolveContent.mockResolvedValueOnce('The quick brown fox jumps over the lazy dog.')
    render(<App/>);

    await waitFor(() => {
      expect(screen.getByTestId('readout')).toHaveTextContent('There are 9 words on this page.')
    })
  });
})

