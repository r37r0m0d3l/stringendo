import { castToString } from "../../utils/castToString";

/**
 * @name textIsMultiline
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textIsMultiline(text) {
  return (castToString(text).match(/\u000A/g) || []).length + 1 > 1;
}
