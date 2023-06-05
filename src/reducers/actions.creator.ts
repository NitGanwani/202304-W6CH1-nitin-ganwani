import { actionTypes } from "./actions.types";

export type PhoneAction = {
  type: string;
  payload: string | boolean;
};

export function addNumberAction(payload: string): PhoneAction {
  return {
    type: actionTypes.add,
    payload,
  };
}
