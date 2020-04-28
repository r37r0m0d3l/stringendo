import { castToString } from "../../utils/castToString";

/**
 * @name textCharCount
 * @namespace stringendo
 * @param {string} text
 * @returns {number}
 */
export function textCharCount(text) {
  return [...castToString(text)].length;
}
