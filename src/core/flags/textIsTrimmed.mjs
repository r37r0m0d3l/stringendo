import { castToString } from "../../utils/castToString";
import { isSame } from "../../utils/isSame";

/**
 * @name textIsTrimmed
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textIsTrimmed(text) {
  const txt = castToString(text);
  return isSame(txt.trim(), txt);
}
