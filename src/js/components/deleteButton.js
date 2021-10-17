import makeElement from "./../utils/makeElement";
import trashIcon from "./icons/trashIcon";

const deleteButton = function(className="ui-button",title="delete") {
    const icon = trashIcon()
    const template = `<button class="${className}">${icon}${title}</button>`
    const element = makeElement(template)
    return element
}

export default deleteButton