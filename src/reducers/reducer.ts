import { PhoneAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type PhoneState = {
  phoneNumber: string;
  isCalling: boolean;
};

export function phoneReducer(state: PhoneState, action: PhoneAction) {
  let payload: string | boolean;
  switch (action.type) {
    case actionTypes.add:
      payload = action.payload as string;
      return { ...state, phoneNumber: state.phoneNumber + payload };
  }
}
