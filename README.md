# Stringendo

JavaScript string inspector.

[![Buy Me A Coffee][buymeacoffee-img]][buymeacoffee-url]
[![Follow New Releases][releasly-img]][releasly-url]

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![GitHub Stars][gh-stars-img]][gh-stars-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]
[![LGTM][lgtm-img]][lgtm-url]

---

*If you use this project don't forget to give a ⭐ [star](https://github.com/r37r0m0d3l/stringendo) ⭐ to it on GitHub!*

---

## Usage

### Functions

-   stringendo()
-   textCharCount()
-   textHasEmoji()
-   textHasNonASCII()
-   textIsMultiline()
-   textIsNormalized()
-   textIsTrimmed()
-   textLength()
-   textLineCount()
-   textListChars()
-   textListCodes()
-   textToURI()
-   textToURL()

### Importing

CommonJS import.

```javascript
const { stringendo } = require("stringendo");
```

ECMAScript Module.

```javascript
import { stringendo } from "stringendo";
```

AMD, UMD, browser script tag.

```html
<script src="https://unpkg.com/stringendo"></script>
```

CDN (unpkg [https://unpkg.com/](https://unpkg.com/))

```html
<script src="https://unpkg.com/stringendo" type="module"></script>
```

Deno (Pika [https://pika.dev/](https://pika.dev/))

```javascript
import { stringendo } from "https://cdn.pika.dev/stringendo";
```

## Examples

```javascript
import { stringendo } from "stringendo";

const text = " good\n+$#\n日programmør 😊 ";
const consolePrint = true;
const inspectionAsJSON = stringendo(text, consolePrint);
```

```json
{
  "flags": {
    "hasEmoji": true,
    "hasNonASCII": true,
    "isLowerCased": true,
    "isMultiline": true,
    "isNormalized": true,
    "isTrimmed": false,
    "isUpperCased": false,
    "isUrlFriendly": false
  },
  "information": {
    "characters": 24,
    "length": 25,
    "lines": 3
  },
  "list": {
    "chars": [
      " ", "g", "o", "o", "d", "\n", "+", "$", "#", "\n", "日", "p",
      "r", "o", "g", "r", "a", "m", "m", "ø", "r", " ", "😊", " "
    ],
    "codes": [
      32, 103, 111, 111, 100, 10, 43, 36, 35, 10, 26085, 112,
      114, 111, 103, 114, 97, 109, 109, 248, 114, 32, 55357, 32
    ]
  },
  "text": {
    "json": "\" good\\n+$#\\n日programmør 😊 \"",
    "lower": " good\n+$#\n日programmør 😊 ",
    "normalized": " good\n+$#\n日programmør 😊 ",
    "string": " good\n+$#\n日programmør 😊 ",
    "upper": " GOOD\n+$#\n日PROGRAMMØR 😊 "
  },
  "urls": {
    "uri": "%20good%0A+$#%0A%E6%97%A5programm%C3%B8r%20%F0%9F%98%8A%20",
    "url": "%20good%0A%2B%24%23%0A%E6%97%A5programm%C3%B8r%20%F0%9F%98%8A%20"
  }
}
```

```shell
String inspection:
  Texts:
    ┌────────────┬────────────────────────────────────┐
    │  (index)   │               Values               │
    ├────────────┼────────────────────────────────────┤
    │    json    │ '" good\\n+$#\\n日programmør 😊 "' │
    │   lower    │   ' good\n+$#\n日programmør 😊 '   │
    │ normalized │   ' good\n+$#\n日programmør 😊 '   │
    │   string   │   ' good\n+$#\n日programmør 😊 '   │
    │   upper    │   ' GOOD\n+$#\n日PROGRAMMØR 😊 '   │
    └────────────┴────────────────────────────────────┘
  Information:
    ┌────────────┬────────┐
    │  (index)   │ Values │
    ├────────────┼────────┤
    │ characters │   24   │
    │   length   │   25   │
    │   lines    │   3    │
    └────────────┴────────┘
  Flags:
    ┌───────────────┬────────┐
    │    (index)    │ Values │
    ├───────────────┼────────┤
    │   hasEmoji    │  true  │
    │  hasNonASCII  │  true  │
    │ isLowerCased  │  true  │
    │  isMultiline  │  true  │
    │ isNormalized  │  true  │
    │   isTrimmed   │ false  │
    │ isUpperCased  │ false  │
    │ isUrlFriendly │ false  │
    └───────────────┴────────┘
  URI:
    %20good%0A+$#%0A%E6%97%A5programm%C3%B8r%20%F0%9F%98%8A%20
  URL:
    %20good%0A%2B%24%23%0A%E6%97%A5programm%C3%B8r%20%F0%9F%98%8A%20
  Characters:
    [" ","g","o","o","d","\n","+","$","#","\n","日","p","r","o","g","r","a","m","m","ø","r"," ","😊"," "]
  Character codes:
    [32,103,111,111,100,10,43,36,35,10,26085,112,114,111,103,114,97,109,109,248,114,32,55357,32]
```

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
[gh-stars-url]: https://github.com/r37r0m0d3l/stringendo
[gh-stars-img]: https://badgen.net/github/stars/r37r0m0d3l/stringendo?&icon=github&label=stars&color=FFCC33
[lgtm-url]: https://github.com/r37r0m0d3l/stringendo
[lgtm-img]: https://badgen.net/lgtm/grade/g/r37r0m0d3l/stringendo?&icon=lgtm&label=lgtm:js/ts&color=00C853
[npm-version-url]: https://npmjs.com/package/stringendo
[npm-version-img]: https://badgen.net/npm/v/stringendo?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/stringendo
[npm-downloads-img]: https://badgen.net/npm/dt/stringendo?&icon=terminal&label=downloads&color=009688
[releasly-url]: https://app.releasly.co/sites/r37r0m0d3l/stringendo?utm_source=github_badge
[releasly-img]: https://app.releasly.co/assets/badges/badge-blue-classic.svg
[travis-url]: https://lgtm.com/projects/g/r37r0m0d3l/stringendo/?mode=list
[travis-img]: https://badgen.net/travis/r37r0m0d3l/stringendo?&icon=travis&label=build
[ts-url]: https://github.com/r37r0m0d3l/stringendo/blob/master/dist/stringendo.d.ts
[ts-img]: https://badgen.net/npm/types/stringendo?&icon=typescript&label=types&color=1E90FF
