import styled from '@Utils/styled';

export const Info = styled.div`
    display: flex;
    min-height: 10rem;

    align-items: center;
    justify-content: center;
`;

export const List = styled.ul`
    display: grid;
    margin: 0;
    padding: 0;

    grid-gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    justify-content: space-between;
`;

export const Item = styled.li`
    display: block;
    margin: 0;
    padding: 0;

    border: 2px solid ${({ theme }) => theme.colors.text.normal};

    list-style: none;
`;

export const Picture = styled.img`
    display: block;
    width: 100%;
`;
