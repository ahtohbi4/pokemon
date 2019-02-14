import styled, { media } from '@Utils/styled';

export const Container = styled.main`
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem 1rem 0;
    box-sizing: border-box;

    ${media.phone`
        padding-right: .5rem;
        padding-left: .5rem;
    `};
`;
