import styled from 'styled-components';
import { readableColor } from 'polished';

export const Name = styled.div`
    padding: .5rem 1rem;

    background-color: ${({ color }) => color};

    color: ${({ color }) => readableColor(color)};
`;
