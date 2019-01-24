import { css } from 'styled-components';

export const DEVICES_SIZES: object = {
    phone: 400,
};

export const media = Object.entries(DEVICES_SIZES).reduce(
    (result: object, [device, resolution]: [string, number]): object => ({
        ...result,
        [device]: (argument: any, ...rest: any) => css`
            @media (max-width: ${resolution}px) {
                ${css(argument, ...rest)}
            }
        `,
    }
), {});
