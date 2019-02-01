import { css } from 'styled-components';

interface MediaType {
    [key: string]: (css: TemplateStringsArray) => string,
}

export const DEVICES_SIZES: object = {
    phone: 400,
};

export const media: MediaType = Object.entries(DEVICES_SIZES).reduce(
    (result: object, [device, resolution]: [string, number]) => ({
        ...result,
        [device]: (argument: any, ...rest: any) => css`
            @media (max-width: ${resolution}px) {
                ${css(argument, ...rest)}
            }
        `,
    }
), {});
