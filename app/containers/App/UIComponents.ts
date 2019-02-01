import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const theme = {
    colors: {
        link: {
            normal: '#0496ff',
            hovered: '#0489e8',
        },

        text: {
            normal: '#586069',
            light: '#ededee',
        },
    },

    font: {
        primary: `
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Helvetica,
            Arial,
            sans-serif,
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol'
        `,
        secondary: `
            Georgia,
            Times,
            'Times New Roman',
            serif
        `,

        size: '16px',
    },
};

export type ThemeType = typeof theme;

export const GlobalStyle = createGlobalStyle`
    ${normalize()};

    html {
        margin: 0;
        padding: 0;

        color: ${({ theme }) => theme.colors.text.normal};
        font-family: ${({ theme }) => theme.font.primary};
        font-size: ${({ theme }) => theme.font.size};
        font-weight: 400;
        line-height: 1.125;
    }

    body {
        min-width: 320px;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    a {
        color: ${({ theme }) => theme.colors.link.normal};
    }

    a:hover {
        color: ${({ theme }) => theme.colors.link.hovered};
    }
`;
