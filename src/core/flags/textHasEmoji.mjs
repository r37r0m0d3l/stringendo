import { EMOJI } from "../../const/emoji";
import { castToString } from "../../utils/castToString";

/**
 * @name textHasEmoji
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textHasEmoji(text) {
  return Boolean((castToString(text).match(EMOJI) || []).length);
}
