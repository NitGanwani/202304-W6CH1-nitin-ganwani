import { PhoneState, phoneReducer } from "../reducers/reducer";
import { useReducer } from "react";
import * as action from "../reducers/actions.creator";

export function usePhone() {
  const initialState: PhoneState = {
    phoneNumber: "",
    isCalling: false,
  };

  const [phoneState, dispatch] = useReducer(phoneReducer, initialState);

  function handleAddNumber(value: string) {
    if (phoneState.phoneNumber.length < 9) {
      dispatch(action.addNumberAction(value));
    }
  }

  return {
    screen: phoneState.phoneNumber,
    isCalling: phoneState.isCalling,
    handleAddNumber,
  };
}
