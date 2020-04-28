import { castToString } from "../../utils/castToString";

/**
 * @name textToURI
 * @namespace stringendo
 * @param {string} text
 * @returns {string}
 */
export function textToURI(text) {
  const txt = castToString(text);
  try {
    return encodeURI(txt);
  } catch (error) {
    return "";
  }
}
