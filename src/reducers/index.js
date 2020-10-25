// action type
const MOVE_ITEM = "MOVE_ITEM";

export function emailReducer(state, action) {
  const { type, payload } = action;
  if (type === MOVE_ITEM) {
    const mainData = { ...state };
    const { dragItem, dropItem } = payload;

    // get the original object
    const key = dragItem.parentLabelID;
    const emailLabelObj = mainData[key];

    // find the email item index
    const emailItemIndex = mainData[key].emails.findIndex(
      (item) => item.id === dragItem.id
    );

    // get the drop item object
    const dropObj = mainData[dropItem.name];

    // create a new email item object from original object
    const dragObj = { ...emailLabelObj.emails[emailItemIndex] };

    // update the desitnation (drop) object
    dropObj.emails.push(dragObj);

    // remove from the original
    emailLabelObj.emails.splice(emailItemIndex, 1);

    return mainData;
  }
  return state;
}
