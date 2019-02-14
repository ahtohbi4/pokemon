import styled, { media } from '@Utils/styled';

export const Container = styled.h1`
    margin: 0 0 1.5rem;
    font-family: ${({ theme }) => theme.font.family.secondary};
    font-size: 1.75rem;
    font-weight: 400;

    ${media.phone`
        margin: 0 0 .75rem;

        font-size: 1.5rem;
    `};
`;
