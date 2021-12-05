/* import { generateUser } from "../static-data";

const user = (state = generateUser(), action) => {
    return state;
}

export default user; */

import { generateUser } from "../static-data";
export default function user(state = generateUser(), action) {
    console.log(state);
  return state;
}

