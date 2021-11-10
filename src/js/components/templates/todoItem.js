import deleteButton from "./../ui/buttons/deleteButton";
import editButton from "./../ui/buttons/editButton";
import makeElement from "./../../utils/makeElement";
import healthIcon from "./../icons/healthIcon";
import workIcon from "./../icons/workIcon";
import artIcon from "./../icons/artIcon";
import recIcon from "./../icons/recIcon";
import schoolIcon from "../icons/schoolIcon";
import logo from "./../icons/logo";

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

function selectIcon(category){
    switch(category){
        case "school":
            return schoolIcon();
        case "art":
            return artIcon();
        case "work":
            return workIcon();
        case "recreation":
            return recIcon();
        case "health":
            return healthIcon();
        default: return logo();
    }
}

//pass the todo object into this method and extract only the properties we want.
const todoTemplate = function({id, category, title, isComplete, startDate, startTime, endDate, endTime}) {
    const completeStatus = isComplete ? "<p class='completed'>Completed</p>" : "<p>&zwnj;</p>"; //zero-width non-joiner to force <p> to render and keep the same height as "Completed"
    const template = 
    `
    <li data-key="${id}" class="${category}">
        <div>
            <h2>${selectIcon(category)} ${title}</h2>
            <p><span>Start Date:</span><br/>${startDate} @ ${startTime}</p>
            <p><span>End Date:</span><br/>${endDate} @ ${endTime}</p>
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