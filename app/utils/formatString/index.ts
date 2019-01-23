export const convertToTitle = ([firstLetter, ...rest]: string) => `${firstLetter.toUpperCase()}${rest.join('')}`;

export const interpolate = (template: string, params: object): string => template
    .replace(/\{[\s]*([\w]+)[\s]*\}/g, (matches: string, name: string) => params[name]);
