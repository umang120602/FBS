export const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PHONE_REGEX = /^[+]*[0-9']+(\s[0-9']+){0,3}$/;
export const emailRegExp = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
export const AMOUNT_REGEX = /^([0-9]{1,10}[.]{0,1})[0-9]{0,2}?$/;
export const NUMBER_REGEX = /^[0-9]*$/;
export const DECIMAL_REGEX = /^\d*\.?\d*$/;
export const PASSWORD_REGEX =
  /(?=^.{8,15}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
export const BANK_SORT_COD_REGEX = /^[0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/;
export const BEN_SWIFTBIC_REGEX = /^[0-9A-Z]{8}$|^[0-9A-Z]{11}$/;
export const ONLY_ALPHABETS_REGEX = /^[A-Za-z]+$/;