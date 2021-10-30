import branding from "./../components/ui/branding";
import todoList from "./../components/ui/todoList";
import todoItem from "./../components/templates/todoItem";
import appBar from "./../components/ui/appBar";
import { getStore } from "./../redux/store";
import todoItem from "./../components/templates/todoItem";


//the todo list page
const toDoPage = function() {
    const todoData = getStore();

    const toDoContent = document.createElement('div') //container for the page
    const brand = branding()
    const listContainer = todoList('ui-list');

    
    //fetch the data and place it into a store
    //do a foreach loop to render the list item for each todo entry
    //append each list item to the list container (ul)
    function render() {
        if (todoData !== null) {
            const elements = todoData.map(item => todoItem(item))
            elements.forEach(element => listContainer.append(element))
        }
        toDoContent.append(brand)
        toDoContent.append(listContainer)
        toDoContent.append(appBar())
    }

    render()
    return toDoContent

}

export default toDoPage