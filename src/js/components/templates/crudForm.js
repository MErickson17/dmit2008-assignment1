import makeElement from "../../utils/makeElement"


const formTemplate = function(pageTitle=null, todoData={}) {
    const template = `
        <div class="crud-form">
        <h1>${pageTitle}</h1>
        <form id="crudform" class="form-flex" data-key="${todoData.id}">
            <div>
                <label for="todoId">ID</label>
                <input type="text" id="todoId" required disabled value="${todoData.id}">                
            </div>
            <div class="side-by-side">
                <div>
                    <label for="category">Category</label>
                    <select  id="category" required>
                        <option selected disabled value="">Select a Category</option>
                        <option value="school">School</option>
                        <option value="recreation">Recreation</option>
                        <option value="health">Health</option> 
                        <option value="work">Work</option> 
                        <option value="art">Art</option> 
                    </select>
                </div>
                <div>
                    <label for="completeStatus">Completed</label>
                    <input type="checkbox" id="completeStatus" value="${todoData.isComplete}">  
                </div>
            </div>
            <div>
                <label for="title">Todo Title</label>
                <input type="text" id="title" value="${todoData.title}" required>
            </div>
            <div class="side-by-side">
                <div>
                    <label for="startDate">Start Date</label>
                    <input type="text" id="startDate" value="${todoData.startDate}" required>
                </div>
                <div>
                    <label for="startTime">Start Time</label>
                    <input type="text" id="startTime" value="${todoData.startTime}" required>
                </div>
            </div>
            <div class="side-by-side">
                <div>
                    <label for="endDate">End Date</label>
                    <input type="text" id="endDate" value="${todoData.endDate}" required>
                </div>
                <div>
                    <label for="endTime">End Time</label>
                    <input type="text" id="endTime" value="${todoData.endTime}" required>
                </div>
            </div>
        </form>
        <div class="error"></div>
    </div>
    `

    const element = makeElement(template)

    return element
}

const addFormTemplate = function(pageTitle=null) {
    const template = `
        <div class="crud-form">
        <h1>${pageTitle}</h1>
        <form id="crudform" class="form-flex">
            <div>
                <label for="todoId">ID</label>
                <input type="text" id="todoId" required disabled>                
            </div>
            <div class="side-by-side">
                <div>
                    <label for="category">Category</label>
                    <select  id="category" required>
                        <option selected disabled value="">Select a Category</option>
                        <option value="school">School</option>
                        <option value="recreation">Recreation</option>
                        <option value="health">Health</option> 
                        <option value="work">Work</option> 
                        <option value="art">Art</option> 
                    </select>
                </div>
                <div>
                    <label for="completeStatus">Completed</label>
                    <input type="checkbox" id="completeStatus">  
                </div>
            </div>
            <div>
                <label for="title">Todo Title</label>
                <input type="text" id="title"required>
            </div>
            <div class="side-by-side">
                <div>
                    <label for="startDate">Start Date</label>
                    <input type="text" id="startDate" required>
                </div>
                <div>
                    <label for="startTime">Start Time</label>
                    <input type="text" id="startTime" required>
                </div>
            </div>
            <div class="side-by-side">
                <div>
                    <label for="endDate">End Date</label>
                    <input type="text" id="endDate" required>
                </div>
                <div>
                    <label for="endTime">End Time</label>
                    <input type="text" id="endTime" required>
                </div>
            </div>
        </form>
        <div class="error"></div>
    </div>
    `

    const element = makeElement(template)

    return element
}

export default formTemplate
export { addFormTemplate }