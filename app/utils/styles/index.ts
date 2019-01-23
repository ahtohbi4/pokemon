import { css } from 'styled-components';

export const DEVICES_SIZES: object = {
    phone: 400,
};

export const media = Object.keys(DEVICES_SIZES).reduce((result: object, device: string) => ({
    ...result,
    [device]: (...params: any) => css`
        @media (max-width: ${DEVICES_SIZES[device]}px) {
            ${css(...params)}
        }
    `,
}), {});
