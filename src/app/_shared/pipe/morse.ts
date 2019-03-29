declare var Morsey : any;
export const option = {
    long: '-',
    short: '.',
    space: ' ',
    wordspace: '-....-',
};

export const reg = /^[A-Za-z0-9.,?!:"'=\s]+$/;
export const morse = new Morsey(option);