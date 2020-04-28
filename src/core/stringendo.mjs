import { EMOJI } from "../const/emoji";
import { castToString } from "../utils/castToString";

/**
 * @name stringendo
 * @namespace stringendo
 * @param {string} text
 * @param {boolean=} print
 * @returns {{urls: {uri: string, url: string}, flags: {isMultiline: boolean, isUrlFriendly: boolean, hasNonASCII: boolean, isLowerCased: boolean, isTrimmed: boolean, isUpperCased: boolean, isNormalized: boolean, hasEmoji: boolean}, information: {characters: number, length: number, lines: number}, text: {string: string, normalized: string, lower: string, upper, json: string}, list: {codes: [], chars: []}}}
 */
export function stringendo(text, print = true) {
  const txt = castToString(text);
  const url = encodeURIComponent(txt);
  const arr = [...txt];
  const characters = arr.length;
  const length = txt.length;
  const normalized = txt.normalize();
  const strLower = txt.toLowerCase();
  const strUpper = txt.toUpperCase();
  const lines = (txt.match(/\u000A/g) || []).length + 1;
  const urls = {
    uri: encodeURI(txt),
    url,
  };
  const data = {
    json: JSON.stringify(txt),
    lower: strLower,
    normalized,
    string: txt,
    upper: strUpper,
  };
  const information = {
    characters,
    length,
    lines,
  };
  const flags = {
    hasEmoji: Boolean((txt.match(EMOJI) || []).length),
    hasNonASCII: length !== characters,
    isLowerCased: txt.localeCompare(strLower) === 0,
    isMultiline: lines > 1,
    isNormalized: txt.localeCompare(normalized) === 0,
    isTrimmed: txt.trim().localeCompare(txt) === 0,
    isUpperCased: txt.localeCompare(strUpper) === 0,
    isUrlFriendly: url.localeCompare(txt) === 0,
  };
  const list = {
    chars: [],
    codes: [],
  };
  arr.forEach((value) => {
    list.chars.push(value);
    list.codes.push(value.charCodeAt(0));
  });
  if (print) {
    console.group("String inspection:");
    console.group("Texts:");
    console.table(data);
    console.groupEnd();
    console.group("Information:");
    console.table(information);
    console.groupEnd();
    console.group("Flags:");
    console.table(flags);
    console.groupEnd();
    console.group("URI:");
    console.log(urls.uri);
    console.groupEnd();
    console.group("URL:");
    console.log(urls.url);
    console.groupEnd();
    console.group("Characters:");
    console.log(JSON.stringify(list.chars));
    console.groupEnd();
    console.group("Character codes:");
    console.log(JSON.stringify(list.codes));
    console.groupEnd();
    console.groupEnd();
  }
  return {
    text: data,
    information,
    flags,
    urls,
    list,
  };
}
