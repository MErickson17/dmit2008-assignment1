import branding from "./../components/branding";
import dataFetcher from "./../utils/dataFetcher";
import render from "./../utils/render";
import todoList from "./../components/todoList";
import todoItem from "./../components/templates/todoItem";
import deleteButton from "./../components/deleteButton";
import editButton from "./../components/editButton";
import appBar from "./../components/appBar";


//the todo list page
const toDoPage = function() {

    const toDoContent = document.createElement('div') //container for the page
    const brand = branding()
    const listContainer = todoList('ui-list');
    let listItem;
    
    //fetch the data and place it into a store
    //do a foreach loop to render the list item for each todo entry
    //append each list item to the list container (ul)
    dataFetcher('https://raw.githubusercontent.com/MErickson17/dmit2008-assignment1/main/data/todos.json')
    .then(data => {
        let store = [...data]
        store.forEach(item => {
            listItem = render(todoItem, item)
            const buttonContainer = document.createElement('div')
            buttonContainer.classList.add("button-container")
            buttonContainer.append(editButton("editBtn"))
            buttonContainer.append(deleteButton("deleteBtn"))
            listItem.append(buttonContainer)
            listContainer.append(listItem)
        });
    })

    toDoContent.append(brand)
    toDoContent.append(listContainer)
    toDoContent.append(appBar())


    return toDoContent

}

export default toDoPage