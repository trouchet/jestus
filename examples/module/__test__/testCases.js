import {
  assert,
  batchAssert,
  atest,
  batchAtest,
  sketch,
} from "../../../jestus";

import { add, multiply, subtract, divide } from "../operations";

const expectToBe = (result, expectation) => expect(result).toBe(expectation);
const expectToThrow = (result) => expect(result).toThrow();

/** Addition cases **/
export let addTestCases;
let addItem, addItems;

addItem = [add(1, 2), 3, expectToBe];
addItems = [
  [add(1, 2), 3, expectToBe],
  [add(2, 3), 5, expectToBe],
];

addTestCases = [
  ["must sum numbers using assert", () => assert(addItem)],
  ["must add sum numbers using batchAssert", () => batchAssert(addItems)],
];

/** Multiplication cases **/
export let multiplyTestCases;
let multiplyItem, multiplyItems;

multiplyItem = [multiply(1, 2), 2, expectToBe];
multiplyItems = [
  [multiply(1, 2), 2, expectToBe],
  [multiply(2, 3), 6, expectToBe],
];

multiplyTestCases = [
  ["should multiply numbers using assert", () => assert(multiplyItem)],
  [
    "must multiply sum numbers using batchAssert",
    () => batchAssert(multiplyItems),
  ],
];

/** Subtraction cases **/
export let subtractTestCases;
let subtractionItem, subtractionItems;

subtractionItem = [subtract(2, 1), 1, expectToBe];
subtractionItems = [
  [subtract(2, 1), 1, expectToBe],
  [subtract(3, 2), 1, expectToBe],
];

subtractTestCases = [
  ["should subtract numbers using assert", () => assert(subtractionItem)],
  [
    "should subtract numbers using batchAssert",
    () => batchAssert(subtractionItems),
  ],
];

/** Division cases **/
export let divisionTestCases;
let divisionItem, divisionItems, invalidDivisionItem;

divisionItem = [divide(42, 2), 21, expectToBe];
divisionItems = [
  [divide(2, 1), 2, expectToBe],
  [divide(3, 2), 1.5, expectToBe],
];
invalidDivisionItem = [() => divide(42, 0), expectToThrow];

divisionTestCases = [
  ["should divide numbers using assert", () => assert(divisionItem)],
  ["should divide numbers using batchAssert", () => batchAssert(divisionItems)],
  [
    "should throw error for 0-division using assert",
    () => assert(invalidDivisionItem),
  ],
];
