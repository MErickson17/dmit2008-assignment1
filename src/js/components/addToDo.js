import makeElement from "./../utils/makeElement";
import addIcon from "./icons/addIcon";

// const addButton = function(className="ui-button", title="add") {
//     const template = `<button class="${className}">${title}</button>`
//     const element = makeElement(template)
//     return element
// }

// export default addButton

const addButton = function(className="ui-button") {
    const icon = addIcon();
    const template = `<button class="${className}">${icon}</button>`
    const element = makeElement(template)
    return element
}

export default addButton