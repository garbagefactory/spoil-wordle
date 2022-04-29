# spoil-wordle

---

A.K.A. the

# _"Schadenfreude Backend"_

Spoils wordle. The perfect ICBM to your enemy, who just so happens to like Wordle.
Implement it into your apps, bots, etc., to get the answer to today's Wordle or days after.

This package will work for ~2000 days, assuming the wordle answers won't change. In the event this happens, I'll update it if I can.

May forget though, go ahead and message me when it happens.

[npm package](https://www.npmjs.com/package/spoil-wordle)

## Installation

---

Install using npm:

```bash
npm i spoil-wordle

```

## Usage

---

Require the package to make use of it.

```js
const wordle = require("spoil-wordle");

//OR:

const { spoilWordle } = require("spoil-wordle");

//Calling package:

console.log(wordle.spoilWordle());

//OR:

console.log(spoilWordle());
```

## Methods

---

```js
 spoilWordle(daysAfterToday : int )
```

Returns the wordle of the day, using the time provided by the system the package is operating on.

Uses single optional parameter, which specifies what day's wordle, in terms of days after today.
Ex. To get tomorrow's wordle, supply 1. To get the day after tomorrow's wordle, supply 2.
If no variable is specified, the function will return today's wordle.

## Properties

---


Module contains a single property, a `wordles` array. This is every wordle answer since 2022-03-13.
Ex.

```js
const { wordles } = require("spoil-wordle");

//OR:

const wordle = require("spoil-wordle");
const wordles2 = wordle.wordles;

console.log(wordles[10]);
console.log(wordles2[10]); 
```
