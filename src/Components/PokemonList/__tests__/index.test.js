import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import PokemonList from '../../PokemonList';

const props = {
    pokemon: [
        {
            name: "testmon"
        },
        {
            name: "testjest"
        }
    ]
}

describe('PokemonList Container Tests', () => {
    afterEach(cleanup);
    it('should render the home page with pokemon', async () => {
        const { getByText } = render(<PokemonList {...props} />)
        await waitForElement(() => getByText('testmon'))

        // const { getByText } = render(<PokemonList />);
        // await waitForElement(() => getByText('Welcome'));
    });
});
