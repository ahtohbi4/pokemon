import { css } from 'styled-components';

export const DEVICES_SIZES = {
    phone: 400,
};

export const media = Object.keys(DEVICES_SIZES).reduce((result, device) => ({
    ...result,
    [device]: (...params) => css`
        @media (max-width: ${DEVICES_SIZES[device]}px) {
            ${css(...params)}
        }
    `,
}), {});
