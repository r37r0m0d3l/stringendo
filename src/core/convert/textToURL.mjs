import { castToString } from "../../utils/castToString";

/**
 * @name textToURL
 * @namespace stringendo
 * @param {string} text
 * @returns {string}
 */
export function textToURL(text) {
  const txt = castToString(text);
  try {
    return encodeURIComponent(txt);
  } catch (error) {
    return "";
  }
}
