import heading from "./heading";
import tagline from "./tagline";
import logo from "./../icons/logo";
import makeElement from "./../../utils/makeElement";

const branding = function() {
    const header = document.createElement('header')
    header.classList.add('ui-page-header')
    const icon = makeElement(logo());
    const h1 = heading('Night C Arts')
    const taglineElm = tagline("manage your tasks artfully")
    header.append(icon)
    header.append(h1)
    header.append(taglineElm)
    
    return header
}

export default branding