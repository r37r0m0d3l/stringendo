import { castToString } from "../../utils/castToString";
import { isSame } from "../../utils/isSame";

/**
 * @name textIsNormalized
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textIsNormalized(text) {
  const txt = castToString(text);
  return isSame(txt.normalize(), txt);
}
