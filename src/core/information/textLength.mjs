import { castToString } from "../../utils/castToString";

/**
 * @name textLength
 * @namespace stringendo
 * @param {string} text
 * @returns {number}
 */
export function textLength(text) {
  return castToString(text).length;
}
