import styled from '@Utils/styled';

export const Container = styled.button`
    background-color: blue;
    border: 0;

    cursor: pointer;

    &:disabled {
        background-color: #ccc;

        cursor: not-allowed;
    }
`;
