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
    let error = form.querySelector('div.error')
    form.querySelector('#completeStatus').checked = todoStatus
    form.querySelector('#category').value = todoCategory

    // validate form is filled out
    function validateFormFilled() {
        // gather form data we need to check. ID is not editable by end user and isComplete is a bool
        let category = form.querySelector('#category').value
        let title = form.querySelector('#title').value
        let startDate = form.querySelector('#startDate').value
        let startTime = form.querySelector('#startTime').value
        let endDate = form.querySelector('#endDate').value
        let endTime = form.querySelector('#endTime').value

        // for now, doing only one feedback message...
        if(category === '' || title.trim() === '' || startDate.trim() === '' || startTime.trim() === '' || endDate.trim() === '' || endTime.trim() === ''){
            if (!error.hasChildNodes()) {
                error.appendChild(document.createTextNode('Please fill out all required fields.'));    
            } 
        }
        else {
            if(error.hasChildNodes()){
                error.removeChild(error.firstChild) //if I later decide to do individual error messages, can do error.textContent = ''
            }
        }
    }

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
        // check that form is filled out
        validateFormFilled()
        //if there are no error messages, can complete the edit
        if(!error.hasChildNodes()){
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