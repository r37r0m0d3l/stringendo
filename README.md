# Stringendo

JavaScript string inspector.

[![npm](https://badgen.net/npm/v/stringendo?&icon=npm&label=npm&color=DD3636)](https://www.npmjs.com/package/stringendo)
[![downloads](https://badgen.net/npm/dt/stringendo?&icon=terminal&label=downloads&color=009688)](https://www.npmjs.com/package/stringendo)
[![stars](https://badgen.net/github/stars/r37r0m0d3l/stringendo?&icon=github&label=stars&color=ffcc33)](https://github.com/r37r0m0d3l/stringendo)
[![types](https://badgen.net/npm/types/stringendo?&icon=typescript&label=types&color=1E90FF)](https://github.com/r37r0m0d3l/stringendo/blob/master/dist/stringendo.d.ts)
[![build](https://badgen.net/travis/r37r0m0d3l/stringendo?&icon=travis&label=build)](https://travis-ci.org/r37r0m0d3l/stringendo)
[![lgtm](https://badgen.net/lgtm/grade/g/r37r0m0d3l/stringendo?&icon=lgtm&label=lgtm:js/ts&color=00C853)](https://lgtm.com/projects/g/r37r0m0d3l/stringendo/alerts/)

---

## Usage

Require CommonJS.

```javascript
const { stringendo } = require("stringendo");
```

Import as ECMAScript module.

```javascript
import { stringendo } from "stringendo";
```

## Examples

```javascript
import { stringendo } from "stringendo";

const text = " good\n+$#\n日programmør ";
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

## My Open Source Projects

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520">
