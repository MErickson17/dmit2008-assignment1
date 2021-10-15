import makeElement from "./../utils/makeElement";

const editButton = function(className="ui-button", title="edit") {
    const template = `<button class="${className}">${title}</button>`
    const element = makeElement(template)
    return element
}

export default editButton