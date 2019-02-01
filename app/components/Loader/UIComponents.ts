import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    min-height: 5rem;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div.attrs({
    role: 'img',
})`
    display: inline-flex;
    width: 60px;
    vertical-align: top;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

const BLINK_DURATION = 1.1; // @units "s"
const blink = keyframes`
    0%,
    60%,
    100% {
        transform: scale(.35);
    }

    30% {
        transform: scale(1);
    }
`;

export const Dot = styled.div`
    display: inline-block;
    width: 30%;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;

    &::before {
        display: block;
        padding-top: 100%;
        content: '';
    }

    &::after {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.text.light};
        border-radius: 100%;
        animation-duration: ${BLINK_DURATION}s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
        animation-name: ${blink};
        animation-timing-function: ease-out;
        content: '';
    }

    &:nth-child(2)::after {
        animation-delay: ${BLINK_DURATION / 6}s;
    }

    &:nth-child(3)::after {
        animation-delay: ${BLINK_DURATION / 3}s;
    }
`;
