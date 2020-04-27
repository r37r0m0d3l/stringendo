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

/**
 * @name stringendo
 * @param {string} text
 * @param {boolean=} print
 * @returns {{urls: {uri: string, url: string}, flags: {isMultiline: boolean, isUrlFriendly: boolean, hasNonASCII: boolean, isLowerCased: boolean, isTrimmed: boolean, isUpperCased: boolean, isNormalized: boolean, hasEmoji: boolean}, information: {characters: number, length: number, lines: number}, text: {string: string, normalized: string, lower: string, upper, json: string}, list: {codes: [], chars: []}}}
 */
export function stringendo(text: string, print: boolean): IStringendo;
