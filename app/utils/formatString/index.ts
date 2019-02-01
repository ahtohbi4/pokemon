export const convertToTitle = ([firstLetter, ...rest]: string) => `${firstLetter.toUpperCase()}${rest.join('')}`;

interface ParamsType {
    [key: string]: string,
}

export const interpolate = (template: string, params: ParamsType): string => template
    .replace(/\{[\s]*([\w]+)[\s]*\}/g, (matches: string, name: string) => params[name]);
