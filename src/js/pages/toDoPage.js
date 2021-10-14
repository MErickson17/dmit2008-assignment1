import branding from "./../components/branding";
import dataFetcher from "./../utils/dataFetcher";
import render from "./../utils/render";
import todoList from "./../components/todoList";
import todoItem from "./../components/templates/todoItem";
import editButton from "./../components/deleteButton";


//the todo list page
const toDoPage = function() {

    const toDoContent = document.createElement('div') //container for the page
    const brand = branding()
    const listContainer = todoList('ui-list');
    
    dataFetcher('https://raw.githubusercontent.com/MErickson17/dmit2008-assignment1/main/data/todos.json')
    .then(data => {
        let store = [...data]
        store.forEach(item => {
            let listItem = render(todoItem, item)
            listItem.append(editButton())
            listContainer.append(listItem)
        });
    })


    
    
    


    //TODO make a ul component --done
    //      make addToDo --done / appBar components
    //make a forEach loop on the todoData to:
    // - use the render function to join the template and data
    // - make it into an element
    // - append to UL


    toDoContent.append(brand)
    toDoContent.append(listContainer)


    return toDoContent
}

export default toDoPage