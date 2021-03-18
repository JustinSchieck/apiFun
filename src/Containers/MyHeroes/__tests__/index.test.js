import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { MyHeroDex } from '../../MyHeroes';
import { mockGetAllHeroes } from '../../../utils/mocks';
import { jssPreset } from '@material-ui/styles';


// jest.mock('react-redux', () => ({
//     useDispatch: () => jest.fn(),
//     useSelector: selector =>
//       selector({
//         ...mockStore,
//       }),
//   }));

// jest.mock('../../../api/server.js', () => ({
//     fetchAll: () => jest.fn().mockResolvedValue(mockGetAllHeroes),
// }));

jest.mock('../../../api/server.js', () => {
    return {
        fetchAll: jest.fn().mockImplementation(() => {
            return mockGetAllHeroes;
        }),
    };
});

describe('Home Container Tests', () => {
    afterEach(cleanup);
    it('should render the HeroList with page content', async () => {
        const { getByText } = render(<MyHeroDex />);
        await waitForElement(() => getByText('Crimson Riot'));
    });
});
