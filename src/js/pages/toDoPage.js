import branding from "./../components/branding"

//the todo list page

const toDoPage = function() {
    const toDoContent = document.createElement('div')
    
    const brand = branding()

    toDoContent.append(brand)
    return toDoContent
}

export default toDoPage