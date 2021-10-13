import makeElement from "./../utils/makeElement";
import editIcon from "./icons/editIcon";


const editButton = function(className="ui-button") {
    const icon = makeElement(editIcon())
    const template = `<button class="${className}">${icon}</button>`
    const element = makeElement(template)
    return element
}

export default editButton