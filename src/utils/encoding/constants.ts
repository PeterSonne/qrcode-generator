export const REGEX_TESTS: Record<string, RegExp> = {
  NUMERIC: /^\d*$/,
  ALPHA_NUMERIC: /^[A-Z\d $%*+\-./,:]*$/,
};

export const CHARSET: Record<string, string> = {
  ALPHA_NUMERIC: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:',
};
