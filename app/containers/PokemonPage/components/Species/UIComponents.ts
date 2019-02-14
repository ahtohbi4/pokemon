import styled from '@Utils/styled';
import { readableColor } from 'polished';

interface ContainerPropsType {
    color: string;
}

export const Container = styled.div<ContainerPropsType>`
    padding: .5rem 1rem;

    background-color: ${({ color }) => color};

    color: ${({ color }) => readableColor(color)};
`;
