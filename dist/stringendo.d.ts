//#region Interfaces
export interface IStringendo {
  text: {
    json: string;
    lower: string;
    normalized: string;
    string: string;
    upper: string;
  };
  information: {
    characters: string;
    length: number;
    lines: number;
  };
  flags: {
    hasEmoji: boolean;
    hasNonASCII: boolean;
    isLowerCased: boolean;
    isMultiline: boolean;
    isNormalized: boolean;
    isTrimmed: boolean;
    isUpperCased: boolean;
    isUrlFriendly: boolean;
  };
  urls: {
    uri: string;
    url: string;
  };
  list: {
    chars: string;
    codes: number[];
  };
}
//#endregion

//#region URI
/**
 * @name textToURI
 * @namespace stringendo
 * @param {string} text
 * @returns {string}
 */
export function textToURI(text: string): string;
/**
 * @name textToURL
 * @namespace stringendo
 * @param {string} text
 * @returns {string}
 */
export function textToURL(text: string): string;
//#endregion

//#region Flags
/**
 * @name textHasEmoji
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textHasEmoji(text: string): boolean;
/**
 * @name textHasNonASCII
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textHasNonASCII(text: string): boolean;
/**
 * @name textIsMultiline
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textIsMultiline(text: string): boolean;
/**
 * @name textIsNormalized
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textIsNormalized(text: string): boolean;
/**
 * @name textIsTrimmed
 * @namespace stringendo
 * @param {string} text
 * @returns {boolean}
 */
export function textIsTrimmed(text: string): boolean;
//#endregion

//#region Information
/**
 * @name textCharCount
 * @namespace stringendo
 * @param {string} text
 * @returns {number}
 */
export function textCharCount(text: string): number;
/**
 * @name textLength
 * @namespace stringendo
 * @param {string} text
 * @returns {number}
 */
export function textLength(text: string): number;
/**
 * @name textLineCount
 * @namespace stringendo
 * @param {string} text
 * @returns {number}
 */
export function textLineCount(text: string): number;
//#endregion

//#region List
/**
 * @name textListChars
 * @namespace stringendo
 * @param {string} text
 * @returns {Array.<string>}
 */
export function textListChars(text: string): string[];
/**
 * @name textListCodes
 * @namespace stringendo
 * @param {string} text
 * @returns {Array.<number>}
 */
export function textListCodes(text: string): number[];
//#endregion

/**
 * @name stringendo
 * @namespace stringendo
 * @param {string} text
 * @param {boolean=} print
 * @returns {{urls: {uri: string, url: string}, flags: {isMultiline: boolean, isUrlFriendly: boolean, hasNonASCII: boolean, isLowerCased: boolean, isTrimmed: boolean, isUpperCased: boolean, isNormalized: boolean, hasEmoji: boolean}, information: {characters: number, length: number, lines: number}, text: {string: string, normalized: string, lower: string, upper, json: string}, list: {codes: [], chars: []}}}
 */
export function stringendo(text: string, print?: boolean): IStringendo;
