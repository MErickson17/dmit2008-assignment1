import makeElement from "./../utils/makeElement";
import editIcon from "./icons/editIcon";


const editButton = function(className="ui-button") {
    
    const template = `<button class="${className}">test</button>`
    const element = makeElement(template)
    return element
}

export default editButton