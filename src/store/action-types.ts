import { ActionTypes as counterTypes } from "./counter/action-types";
import { ActionTypes as counter1Types } from "./counter1/action-types";

export const AllActionTypes = { ...counterTypes, ...counter1Types };

// export type ATypes = typeof AllActionTypes;
