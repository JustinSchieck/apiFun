import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { Home } from '../../Home';

describe('Home Container Tests', () => {
    afterEach(cleanup);
    it('should render the home page with welcome message', async () => {
        const { getByText } = render(<Home />);
        await waitForElement(() => getByText('Welcome'));
    });
});
