import { SET_ACTIVE_USER_ID } from "../constants/action-types";
export default function activeUserId(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
        console.log(action.payload, "test")
      return action.payload;
    default:
      return state;
  }
}