import styled from '@Utils/styled';

import { Link } from '@Containers/Router';

import { PropsType } from './';

export const Container = styled.span.attrs(({ to }: PropsType) => ({
    as: (to ? Link : 'a'),
}))`
    color: ${({ theme }) => theme.colors.link.normal};
    text-decoration: underline;

    &:visited {
        color: ${({ theme }) => theme.colors.link.visited};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.link.hovered};
        text-decoration: none;
    }
`;
