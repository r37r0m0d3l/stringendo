import { castToString } from "../../utils/castToString";

/**
 * @name textLineCount
 * @namespace stringendo
 * @param {string} text
 * @returns {number}
 */
export function textLineCount(text) {
  return (castToString(text).match(/\u000A/g) || []).length + 1;
}
