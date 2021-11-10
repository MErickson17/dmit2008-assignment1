import branding from "./../components/ui/branding";
import formTemplate from "./../components/templates/crudForm";


const editPage = function(props){
    const todoData = props
    console.log(todoData)
    const todoStatus = todoData.isComplete
    const todoCategory = todoData.category
    
    const editContent = document.createElement('div')
    const brand = branding()
    const form = formTemplate("Edit Todo Item", todoData)
    form.querySelector('#completeStatus').checked = todoStatus
    form.querySelector('#category').value = todoCategory

    editContent.append(brand)
    editContent.append(form)

    return editContent
}

export default editPage