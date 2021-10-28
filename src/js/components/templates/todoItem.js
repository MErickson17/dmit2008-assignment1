import deleteButton from "../ui/deleteButton";
import editButton from "../ui/editButton";
import makeElement from "../../utils/makeElement";
//Data Model:
/*
    todoItem = {
        id:string,
        title:string,
        category:string,
        completed: bool,
        startDate: string,
        startTime: string,
        endDate: string,
        endTime: string
    }
*/

//pass the todo object into this method and extract only the properties we want.
const todoTemplate = function({id, category, title, isComplete, startDate, startTime, endDate, endTime}) {
    const completeStatus = isComplete ? "<p class='completed'>Completed</p>" : "<p>&zwnj;</p>"; //zero-width non-joiner to force <p> to render and keep the same height as "Completed"
    const template = 
    `
    <li data-key="${id}" class="${category}">
        <div>
            <h2>${title}</h2>
            <p>Start Date: ${startDate} @ ${startTime}</p>
            <p>End Date: ${endDate} @ ${endTime}</p>
            ${completeStatus}
        </div>
        <div class="button-container" data-key="${id}">
            ${editButton("editBtn")}
            ${deleteButton("deleteBtn")}
        </div>
    </li>
    `

    const element = makeElement(template)

    return element
}

export default todoTemplate