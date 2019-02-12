import styled from '@Utils/styled';

export const Container = styled.button`
    padding: .5rem 1rem;

    background-color: ${({ theme }) => theme.colors.button.normal};
    border: 0;
    border-radius: 3px;

    color: #fff;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: 1rem;
    line-height: 1.125;

    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.button.hovered};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.button.active};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.button.disabled};

        color: #555;

        cursor: not-allowed;
    }
`;
