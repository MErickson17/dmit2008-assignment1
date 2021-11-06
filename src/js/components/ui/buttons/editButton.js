import editIcon from "./../../icons/editIcon";

const editButton = function(className="ui-button", title="edit") {
    const icon = editIcon();
    const template = `<button id="edit" class="${className}">${icon}${title}</button>`
    //const element = makeElement(template)
    return template
}
S
export default editButton