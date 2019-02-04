import styled from '@Utils/styled';

import { Link } from '@Containers/Router';

import { PropsType } from './';

export const Container = styled.span.attrs({
    as: ({ to }: PropsType) => to ? Link : 'a',
})`
    color: ${({ theme }) => theme.colors.link.normal};
    text-decoration: underline;

    &:hover {
        color: ${({ theme }) => theme.colors.link.hovered};
        text-decoration: none;
    }
`;
