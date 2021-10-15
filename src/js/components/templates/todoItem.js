import deleteButton from "./../deleteButton";
import editButton from "./../editButton";

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
    const completeStatus = isComplete ? "<p>Completed</p>" : "";

    const template = 
    `
    <li data-key="${id}" class="${category}">
        <input type="text" value="${title}">
        <p>Start Date: ${startDate} @ ${startTime}</p>
        <p>End Date: ${endDate} @ ${endTime}</p>
        ${completeStatus}
    </li>
    `

    return template
}

export default todoTemplate