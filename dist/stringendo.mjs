function castToString(t){if(null==t)return"";if("string"==typeof t)return t;const e=t.toString();return"0"===e&&Object.is(t,-0)?"-0":e}function textToURI(t){const e=castToString(t);try{return encodeURI(e)}catch(t){return""}}function textToURL(t){const e=castToString(t);try{return encodeURIComponent(e)}catch(t){return""}}const t=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;function textHasEmoji(e){return Boolean((castToString(e).match(t)||[]).length)}function textHasNonASCII(t){const e=castToString(t);return e.length!==[...e].length}function textIsMultiline(t){return(castToString(t).match(/\u000A/g)||[]).length+1>1}function isSame(t,e){return 0===t.localeCompare(e)}function textIsNormalized(t){const e=castToString(t);return isSame(e.normalize(),e)}function textIsTrimmed(t){const e=castToString(t);return isSame(e.trim(),e)}function textCharCount(t){return[...castToString(t)].length}function textLength(t){return castToString(t).length}function textLineCount(t){return(castToString(t).match(/\u000A/g)||[]).length+1}function textListChars(t){return[...castToString(t)]}function textListCodes(t){return[...castToString(t)].map(t=>t.charCodeAt(0))}function stringendo(e,o=!0){const n=castToString(e),u=encodeURIComponent(n),r=[...n],c=r.length,s=n.length,i=n.normalize(),a=n.toLowerCase(),d=n.toUpperCase(),l=(n.match(/\u000A/g)||[]).length+1,g={uri:encodeURI(n),url:u},f={json:JSON.stringify(n),lower:a,normalized:i,string:n,upper:d},h={characters:c,length:s,lines:l},m={hasEmoji:Boolean((n.match(t)||[]).length),hasNonASCII:s!==c,isLowerCased:0===n.localeCompare(a),isMultiline:l>1,isNormalized:0===n.localeCompare(i),isTrimmed:0===n.trim().localeCompare(n),isUpperCased:0===n.localeCompare(d),isUrlFriendly:0===u.localeCompare(n)},p={chars:[],codes:[]};return r.forEach(t=>{p.chars.push(t),p.codes.push(t.charCodeAt(0))}),o&&(console.group("String inspection:"),console.group("Texts:"),console.table(f),console.groupEnd(),console.group("Information:"),console.table(h),console.groupEnd(),console.group("Flags:"),console.table(m),console.groupEnd(),console.group("URI:"),console.log(g.uri),console.groupEnd(),console.group("URL:"),console.log(g.url),console.groupEnd(),console.group("Characters:"),console.log(JSON.stringify(p.chars)),console.groupEnd(),console.group("Character codes:"),console.log(JSON.stringify(p.codes)),console.groupEnd(),console.groupEnd()),{text:f,information:h,flags:m,urls:g,list:p}}export{stringendo,textCharCount,textHasEmoji,textHasNonASCII,textIsMultiline,textIsNormalized,textIsTrimmed,textLength,textLineCount,textListChars,textListCodes,textToURI,textToURL};
//# sourceMappingURL=stringendo.mjs.map
