import styled, { media } from '@Utils/styled';

import { PropsType } from './';

export const Container = styled.div.attrs({
    as: ({ tagName }: PropsType) => tagName,
})<PropsType>`
    ${({ tagName, theme }) => {
        switch (tagName) {
            case 'h1':
                return `
                    margin: 2rem 0 1.5rem;
                    font-family: ${theme.font.family.secondary};
                    font-size: 1.75rem;
                    font-weight: 400;

                    ${media.phone`
                        margin: .5rem 0;
                    `};
                `;

            case 'h2':
                return `
                    margin: 0 0 1rem;
                    font-family: ${theme.font.family.primary};
                    font-size: 1.125rem;
                    font-weight: 400;
                `;

            default:
                return null;
        }
    }};
`;
