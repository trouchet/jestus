import { isString } from "lodash";
import { fulfill, isExtensionOf } from "./utils";
import { 
  isAssertArtifact,
  isOrganizationArtifact,
  isActArtifact,
  isRehearsalArtifact,
  isPlayArtifact
} from "./checkers";

import { catalog } from 'arqeo'

import { assertArtifactCriteria, organizationCriteria } from "./criteriaStrings";
import { defaultArrayTruthMessage } from "./defaults";

const arrayTruthHeader = (falseElements) => {
  const condition = `non-fulfilling elements on keys [${falseElements}]`;

  return `The provided array have condition ${condition}. `;
};

export const buildError = (errorClass, errorMessage) => {
  return {
    message: fulfill(
      errorMessage, isString(errorMessage),
      "Error message must be a string!", TypeError
    ),
    type: fulfill(
      errorClass, isExtensionOf(errorClass, Error),
      "Error type must extend Error class!", TypeError
    ),
  };
};  

export const arrayTruthError = (
  candidates, isCallback,
  criteriaMessage = defaultArrayTruthMessage
) => {
  const TMessage = arrayTruthHeader(
    JSON.stringify(catalog(candidates, isCallback))
  ) + "\n" + criteriaMessage;
  
  return buildError(TypeError, TMessage);
};

export const assertionError = (item) => 
  arrayTruthError(item, isAssertArtifact, assertArtifactCriteria);

export const assertionArtifactError = (items) => assertionError(items);

export const organizationTypeError = (candidate) => 
  arrayTruthError(candidate, isOrganizationArtifact, organizationCriteria);

export const actTypeError = (candidate) => 
  arrayTruthError(candidate, isActArtifact, organizationCriteria);

export const rehearsalTypeError = (candidate) => 
  arrayTruthError(candidate, isRehearsalArtifact, organizationCriteria);

export const playTypeError = (candidate) => 
  arrayTruthError(candidate, isPlayArtifact, organizationCriteria);


