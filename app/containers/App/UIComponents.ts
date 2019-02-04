import { normalize } from 'polished';

import { createGlobalStyle } from '@Utils/styled';

export const GlobalStyle = createGlobalStyle`
    ${normalize()};

    html {
        margin: 0;
        padding: 0;

        color: ${({ theme }) => theme.colors.text.normal};
        font-family: ${({ theme }) => theme.font.family.primary};
        font-size: ${({ theme }) => theme.font.size};
        font-weight: 400;
        line-height: 1.125;
    }

    body {
        min-width: 320px;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
    }
`;
