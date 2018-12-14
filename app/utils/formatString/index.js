export const convertToTitle = ([firstLetter, ...rest]) => `${firstLetter.toUpperCase()}${rest.join('')}`;

export const interpolate = (template, params) => template
    .replace(/\{[\s]*([\w]+)[\s]*\}/g, (matches, name) => params[name]);
