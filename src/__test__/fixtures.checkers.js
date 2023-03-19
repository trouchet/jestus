import { expectToBe, expectToBeDefined } from "../expectTo";
import { emptyCallback, identityCallback } from "../defaults";
import { buildAct, buildOrganization } from "../build";
    
/*-------------------------*\
 | assert design           |
 *-------------------------*/
 export const assertFixtures = [
    [42, expectToBeDefined],
    ["42", expectToBe, "42"],
  ];
  
  // Valid samples
  export const validAssertLength2Item = assertFixtures[0];
  export const validAssertLength3Item = assertFixtures[1];
  
  // Error-prone samples
  export const invalidAssertItemLength = ["42"];
  export const invalidAssertCallbackItem = ["42", "42"];
  
  /*-------------------------
   | atest design
   *-------------------------*/
  export let validAtestAct;
  let setup, prepare, perform, teardown, organization;
  
  export let validAtestFixture = "42";
  const resultFunction = (fixture_) => fixture_;
  let expectedAtestResult = "42";
  
  setup = emptyCallback;
  
  prepare = (fixture_) => fixture_;
  
  perform = (resources) => {
    const assertItem = [
      resultFunction(resources),
      expectToBe,
      expectedAtestResult,
    ];
  
    return [assertItem];
  };
  
  teardown = emptyCallback;
  
  organization = buildOrganization(setup, prepare, teardown);
  validAtestAct = buildAct(perform, organization);
  
  export const validOrganizations = [
    {},
    { setup: () => {} },
    { prepare: (x) => x },
    { teardown: () => {} },
    { setup: () => {}, prepare: (x) => x },
    { setup: () => {}, teardown: () => {} },
    { prepare: () => {}, teardown: () => {} },
    { setup: () => {}, prepare: (x) => x, teardown: () => {} },
  ];
  
  export const invalidOrganization = { setup_: () => {} };
  export const invalidOrganizations = [
    ...validOrganizations,
    invalidOrganization,
  ];

  const add = (a, b) => a + b;
const addCallback = (fixture) => add(fixture.a, fixture.b);

setup = emptyCallback;
prepare = identityCallback;
teardown = emptyCallback;

export let additionAct = buildAct(addCallback);
  