import makeElement from "./../utils/makeElement";

const deleteButton = function(className="ui-button",title="delete") {
    const template = `<button class="${className}">${title}</button>`
    const element = makeElement(template)
    return element
}

export default deleteButton