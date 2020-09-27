import { MutationTypes as counterTypes } from "./counter/mutation-types";
import { MutationTypes as counter1Types } from "./counter1/mutation-types";

export const AllMutationTypes = { ...counterTypes, ...counter1Types };

// export type ATypes = typeof AllMutationTypes;
