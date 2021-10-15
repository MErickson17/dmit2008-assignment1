import makeElement from "./../utils/makeElement";

const addButton = function(className="ui-button", title="add") {
    const template = `<button class="${className}">${title}</button>`
    const element = makeElement(template)
    return element
}

export default addButton