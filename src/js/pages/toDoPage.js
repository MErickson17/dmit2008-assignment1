import branding from "./../components/branding"
import makeElement from "./../utils/makeElement";


//the todo list page
const toDoPage = function() {
//doing this for now instead of dataFetcher b/c there seems
//to be an issue with parcel(?) and using it with local data
    const todoData = require('./../data/todos.json')
    
    const toDoContent = document.createElement('div') //container for the page
    const brand = branding()

    //TODO make a ul component --done
    //      make addToDo / appBar components
    //make a forEach loop on the todoData to:
    // - use the render function to join the template and data
    // - make it into an element
    // - append to UL


    toDoContent.append(brand)


    return toDoContent
}

export default toDoPage