import { actions } from "../../constants/actions.types";

export const firstReducer = (
  state = {
    project: "CS-SS-Dev"
  },
  action
) => {
  switch (action.type) {
    case actions.START:
      return state;
    default:
      return state;
  }
};
