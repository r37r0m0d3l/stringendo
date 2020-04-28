import { castToString } from "../../utils/castToString";

/**
 * @name textListCodes
 * @namespace stringendo
 * @param {string} text
 * @returns {Array.<number>}
 */
export function textListCodes(text) {
  return [...castToString(text)].map((value) => value.charCodeAt(0));
}
