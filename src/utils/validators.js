export const required = value => (value ? undefined : "Required field");
export const maxSymbols = maxLength => (value = "") => (value.length <= maxLength ? undefined : `Max length is ${maxLength} symbols`);

export const maxSymbols10  = maxSymbols(10);
export const maxSymbols100 = maxSymbols(100);