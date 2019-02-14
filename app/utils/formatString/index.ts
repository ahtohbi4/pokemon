export const convertToTitle = ([firstLetter, ...rest]: string) => `${firstLetter.toUpperCase()}${rest.join('')}`;

interface ParamsType {
    [key: string]: string;
}

export const interpolate = (template: string, params: ParamsType): string => template
    .replace(/\{[\s]*([\w]+)[\s]*\}/g, (_matches, name: string) => params[name]);
