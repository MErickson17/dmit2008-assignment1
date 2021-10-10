import branding from "./../components/branding";
import link from './../components/link';
import meteor from './../components/icons/meteor';
import makeElement from "./../utils/makeElement";

//Page not found page
const pageNotFound = function() {
    const notFoundContent = document.createElement('div')
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('link-container')    
    
    const brand = branding()
    const image = makeElement(meteor())
    
    const linkElm = link('go back!!', '/')
    linkContainer.append(linkElm)

    notFoundContent.append(brand)
    notFoundContent.append(image)
    notFoundContent.append(linkContainer)
    return notFoundContent
}

export default pageNotFound