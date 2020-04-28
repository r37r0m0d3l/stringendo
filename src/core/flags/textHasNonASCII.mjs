import { castToString } from "../../utils/castToString";

/**
 * @name textHasNonASCII
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textHasNonASCII(text) {
  const txt = castToString(text);
  return txt.length !== [...txt].length;
}
