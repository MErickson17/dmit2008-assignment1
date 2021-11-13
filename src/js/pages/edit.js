import branding from "./../components/ui/branding";
import formTemplate from "./../components/templates/crudForm";
import button from "./../components/ui/buttons/button";
import Router from "./../routes/router";
import reducer from "./../redux/reducers";

const editButton = button("edit todo");
editButton.setAttribute("form", "crudform");
editButton.setAttribute("type", "submit");

const cancelButton = button("cancel");


const editPage = function(props){    
    // set up page elements
    const brand = branding()
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('crud-controls')    
    const editContent = document.createElement('div')
    
    // gather data
    const todoData = props
    const todoStatus = todoData.isComplete
    const todoCategory = todoData.category
    // set up form
    const form = formTemplate("Edit Todo Item", todoData)
    form.querySelector('#completeStatus').checked = todoStatus
    form.querySelector('#category').value = todoCategory

    // Cleaning up event handlers when changing pages
    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelEdit)
        editButton.removeEventListener('click', onEditTodo)
    }    

    // Cancel edit action handler
    function onCancelEdit (e) {
        cleanUp()
        Router('/todo')
    }

    //Edit todo action handler
    function onEditTodo (e) {
        e.preventDefault()

        //gather updated data
        const updated = Object.assign({}, todoData, {
            id: form.querySelector('#todoId').value,
            category: form.querySelector('#category').value,
            title: form.querySelector('#title').value,
            isComplete: form.querySelector('#completeStatus').checked,
            startDate: form.querySelector('#startDate').value,
            startTime: form.querySelector('#startTime').value,
            endDate: form.querySelector('#endDate').value,
            endTime: form.querySelector('#endTime').value
        })


        const action = {
            type:"edit",
            payload: updated,
            cb:()=> Router('/todo')
        }
        reducer(action)
        cleanUp()
    }

    //add event listeners
    buttonContainer.append(cancelButton, editButton)
    cancelButton.addEventListener('click', onCancelEdit)
    editButton.addEventListener('click', onEditTodo)
    
    //build page
    editContent.append(brand)
    editContent.append(form)
    editContent.append(buttonContainer)

    return editContent
}

export default editPage