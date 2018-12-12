export default (template, params) => template.replace(/\{[\s]*([\w]+)[\s]*\}/g, (matches, name) => params[name]);
