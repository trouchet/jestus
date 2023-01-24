import { sketch, prove } from '../../../index';

import {
  addTestCases,
  multiplyTestCases,
  subtractTestCases,
  divisionTestCases,
} from "./testCases";

/*
 *  Test design
 */

let sketches;

/** Description **/
sketches = [
  ["add", () => sketch(addTestCases)],
  ["multiply", () => sketch(multiplyTestCases)],
  ["subtract", () => sketch(subtractTestCases)],
  ["divide", () => sketch(divisionTestCases)],
];

prove(sketches);
