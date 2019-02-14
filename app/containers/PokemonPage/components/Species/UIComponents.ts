import styled from '@Utils/styled';
import { readableColor } from 'polished';

interface NamePropsType {
    color: string;
}

export const Name = styled.div<NamePropsType>`
    padding: .5rem 1rem;

    background-color: ${({ color }) => color};

    color: ${({ color }) => readableColor(color)};
`;
