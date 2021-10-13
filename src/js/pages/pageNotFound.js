import branding from "./../components/branding";
import link from './../components/link';
import meteor from './../components/icons/meteor';
import makeElement from "./../utils/makeElement";
import errorMsg from "../components/errorMsg";

//Page not found page
const pageNotFound = function() {
    const notFoundContent = document.createElement('div')
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('link-container')    
    
    const brand = branding()
    const image = makeElement(meteor()) //add a class?
    const message = errorMsg('404', 'Seems like you\'re looking for something that isn\'t here...')
    
    const linkElm = link('go back!!', '/')
    linkContainer.append(linkElm)

    notFoundContent.append(brand)
    notFoundContent.append(image)
    notFoundContent.append(message)
    notFoundContent.append(linkContainer)
    return notFoundContent
}

export default pageNotFound