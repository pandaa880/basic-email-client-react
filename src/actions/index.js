const MOVE_ITEM = "MOVE_ITEM";

export const moveEmailAction = (payload) => {
  return {
    type: MOVE_ITEM,
    payload,
  };
};
