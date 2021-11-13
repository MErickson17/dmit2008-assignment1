import branding from "./../components/ui/branding";
import addFormTemplate from "../components/templates/addForm";
import button from "./../components/ui/buttons/button";
import Router from "./../routes/router";
import reducer from "./../redux/reducers";
import { generateSingleKey } from "./../utils/key";

const addButton = button("add todo");
addButton.setAttribute("form", "crudform");
addButton.setAttribute("type", "submit");

const cancelButton = button("cancel");


const addPage = function(props){    
    // set up page elements
    const brand = branding()
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('crud-controls')    
    const addContent = document.createElement('div')
    form = addFormTemplate("Add Todo Item")
    form.querySelector('#todoId').value = generateSingleKey()

    // Cleaning up event handlers when changing pages
    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelAdd)
        addButton.removeEventListener('click', onAddTodo)
    }    

    // Cancel add action handler
    function onCancelAdd (e) {
        cleanUp()
        Router('/todo')
    }

    // add todo action handler
    function onAddTodo (e) {
        e.preventDefault()

        // gather updated data
        const newTodo = {
            id: form.querySelector('#todoId').value,
            category: form.querySelector('#category').value,
            title: form.querySelector('#title').value,
            isComplete: form.querySelector('#completeStatus').checked,
            startDate: form.querySelector('#startDate').value,
            startTime: form.querySelector('#startTime').value,
            endDate: form.querySelector('#endDate').value,
            endTime: form.querySelector('#endTime').value
        }


        const action = {
            type:"add",
            payload: newTodo,
            cb:()=> Router('/todo')
        }
        reducer(action)
        cleanUp()
    }

    // add event listeners
    buttonContainer.append(cancelButton, addButton)
    cancelButton.addEventListener('click', onCancelAdd)
    addButton.addEventListener('click', onAddTodo)
    
    // build page
    addContent.append(brand)
    addContent.append(form)
    addContent.append(buttonContainer)

    return addContent
}

export default addPage