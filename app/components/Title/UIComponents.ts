import styled from 'styled-components';

import { media } from '@Utils/styles';

export const Container = styled.div`
    ${({ as, theme }) => {
        switch (as) {
            case 'h1':
                return `
                    margin: 2rem 0 1.5rem;

                    font-family: ${theme.font.secondary};
                    font-size: 1.75rem;
                    font-weight: 400;

                    ${media.phone`
                        margin: .5rem 0;
                    `};
                `;

            case 'h2':
                return `
                    margin: 0 0 1rem;

                    font-family: ${theme.font.primary};
                    font-size: 1.125rem;
                    font-weight: 400;
                `;

            default:
                return null;
        }
    }};
`;