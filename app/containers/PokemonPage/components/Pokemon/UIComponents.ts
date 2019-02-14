import styled, { media } from '@Utils/styled';

export const Title = styled.h2`
    margin: 0 0 1rem;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: 1.125rem;
    font-weight: 400;

    ${media.phone`
        font-size: 1rem;
        font-weight: 500;
    `};
`;
