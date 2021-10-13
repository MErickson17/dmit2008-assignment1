import makeElement from "./../utils/makeElement";
import deleteIcon from "./icons/trashIcon";

const deleteButton = function(className="ui-button") {
    const icon = makeElement(deleteIcon);
    const template = `<button class="${className}">${icon}</button>`;
    const element = makeElement(element)
    return element
}

export default deleteButton