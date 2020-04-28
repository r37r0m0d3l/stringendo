import { castToString } from "../../utils/castToString";

/**
 * @name textListChars
 * @namespace stringendo
 * @param {string} text
 * @returns {Array.<string>}
 */
export function textListChars(text) {
  return [...castToString(text)];
}
