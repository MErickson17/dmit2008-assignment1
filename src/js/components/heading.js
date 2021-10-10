import makeElement from "../utils/makeElement";

const heading = function(title="uiHeading", className="ui-heading") {
    const template = `<h1 class="${className}">${title}</h1>`
    const element = makeElement(template)
    
    return element
}

export default heading