/**
 * @name isSame
 * @param {string} text1
 * @param {string} text2
 * @returns {boolean}
 */
export function isSame(text1, text2) {
  return text1.localeCompare(text2) === 0;
}
