import styled from '@Utils/styled';

import logo from './images/logo.svg';

export const Container = styled.header`
    min-height: 40vw;
    position: relative;

    background-attachment: fixed;
    background-blend-mode: color-dodge;
    background-color: ${({ color = '#bbb' }) => color};
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 100%;

    transition-duration: .25s;
    transition-property: background-color;
    transition-timing-function: ease-in-out;

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-image: linear-gradient(to top, rgba(0, 0, 0, .1), rgba(0, 0, 0, 0) 15%);

        content: '';
    }
`;
