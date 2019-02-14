import * as styledComponents from 'styled-components';

import {
    DEFAULT_THEME,
    DEVICES_SIZES,
} from './constants';

type ThemeType = typeof DEFAULT_THEME;
const {
    default: styled,

    ThemeProvider,
    createGlobalStyle,
    css,
    keyframes,
} = (styledComponents as any as styledComponents.ThemedStyledComponentsModule<ThemeType>);

export {
    DEFAULT_THEME,
    ThemeProvider,
    createGlobalStyle,
    css,
    keyframes,
};
export default styled;

interface MediaType {
    [key: string]: (css: TemplateStringsArray) => string;
}

export const media: MediaType = Object.entries(DEVICES_SIZES).reduce(
    (result: MediaType, [device, resolution]: [string, number]) => ({
        ...result,
        [device]: (argument: any, ...rest: any) => css`
        @media (max-width: ${resolution}px) {
            ${css(argument, ...rest)}
        }
    `,
    }
), {});
