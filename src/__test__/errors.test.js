import { isNumber } from "lodash";
import { defaultArrayTruthMessage } from "../defaults";
import { arrayTruthError, assertionArtifactError, organizationTypeError } from "../errors";
import { expectToBe, expectToMatch } from "../expectTo";
import { assertFixtures, invalidAssertItems } from "./fixtures";

let result, expectation;

describe("Errors", () => {
  it("must provide organization error", () => {
    const orgError = organizationTypeError("Not an organization");

    expectToMatch(orgError.message, "[false]");
  });
  it("must match on truthError message the truthMessage and falseIndexesString", () => {
    const truthMessage = "\n This array must have only numbers. :/";
    const candidate = [42, '42'];
    
    const truthError = arrayTruthError(candidate, isNumber, truthMessage)

    expectation = '[true,false]';

    expectToMatch(truthError.message, truthMessage);
    expectToMatch(truthError.message, expectation);
  });
  it("must match defaultArrayTruthMessage on truthError message without truthMessage", () => {
    const truthMessage = "\n This array must have only numbers. :/";
    const candidate = [42, '42'];

    const truthError = arrayTruthError(candidate, isNumber)

    expectToMatch(truthError.message, defaultArrayTruthMessage);
  });
  it("must validate error message on all invalid assertion items", () => {
    const falseIndexes = '[false]';
    const assertionError = assertionArtifactError(invalidAssertItems);
    
    expectToBe(assertionError.type, TypeError);
    expectToMatch(assertionError.message, falseIndexes);
  });
  it("must validate error message on all invalid assertion items", () => {
    const falseIndexes = '[true]';
    const assertionError = assertionArtifactError(assertFixtures);
    
    expectToBe(assertionError.type, TypeError);
    expectToMatch(assertionError.message, falseIndexes);
  });
});
