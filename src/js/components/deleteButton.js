import makeElement from "./../utils/makeElement";
import editIcon from "./icons/editIcon";
import deleteIcon from "./icons/trashIcon";

const deleteButton = function(className="ui-button") {
    const icon = makeElement(editIcon)
    const element = `<button class="${className}">${icon}</button>`
    return element
}

export default deleteButton