import makeElement from "./../utils/makeElement";
import editIcon from "./icons/editIcon";


const editButton = function(className="ui-button") {
    const icon = makeElement(editIcon())
    const element = `<button class="${className}">${icon}</button>`
    return element
}

export default editButton