!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((o=o||self).stringendo={})}(this,(function(o){"use strict";const e=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;o.stringendo=function stringendo(o,u=!0){const n=o.toString(),d=encodeURIComponent(n),c=[...n],s=c.length,r=function stringHasEmoji(o){const u=o.match(e)||[];return Boolean(u.length)}(n),l=0===d.localeCompare(n),t=JSON.stringify(n),a=n.length,i=n.normalize(),f=0===n.localeCompare(i),g=n,p=a!==s,h=n.toLowerCase(),m=n.toUpperCase(),b=0===n.localeCompare(h),C=0===n.localeCompare(m),E=0===n.trim().localeCompare(n),y=(n.match(/\u000A/g)||[]).length+1,U={uri:encodeURI(n),url:d},I={json:t,lower:h,normalized:i,string:g,upper:m},S={characters:s,length:a,lines:y},j={hasEmoji:r,hasNonASCII:p,isLowerCased:b,isMultiline:Boolean(y),isNormalized:f,isTrimmed:E,isUpperCased:C,isUrlFriendly:l},x={chars:[],codes:[]};return c.forEach(o=>{x.chars.push(o),x.codes.push(o.charCodeAt(0))}),u&&(console.group("String inspection:"),console.group("Texts:"),console.table(I),console.groupEnd(),console.group("Information:"),console.table(S),console.groupEnd(),console.group("Flags:"),console.table(j),console.groupEnd(),console.group("URI:"),console.log(U.uri),console.groupEnd(),console.group("URL:"),console.log(U.url),console.groupEnd(),console.group("Characters:"),console.log(JSON.stringify(x.chars)),console.groupEnd(),console.group("Character codes:"),console.log(JSON.stringify(x.codes)),console.groupEnd(),console.groupEnd()),{text:I,information:S,flags:j,urls:U,list:x}},Object.defineProperty(o,"__esModule",{value:!0})}));
//# sourceMappingURL=stringendo.js.map
