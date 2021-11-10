import makeElement from "./../../utils/makeElement";
import healthIcon from "./../icons/healthIcon";
import workIcon from "./../icons/workIcon";
import artIcon from "./../icons/artIcon";
import recIcon from "./../icons/recIcon";
import schoolIcon from "../icons/schoolIcon";

const categoryLegend = function() {
    const template = `
    <div class="legend">    
        <div class="col">
            <h3>Categories</h3>
            <p class="health-legend">${healthIcon()} Health</p>
            <p class="school-legend">${schoolIcon()} School</p>
        </div>
        <div class="col">
            <p class="art-legend">${artIcon()} Art</p>            
            <p class="rec-legend">${recIcon()} Recreation</p>            
            <p class="work-legend">${workIcon()} Work</p>
        </div>
    `

    const element = makeElement(template)

    return element
}

export default categoryLegend