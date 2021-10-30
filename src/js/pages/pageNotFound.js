import branding from "./../components/ui/branding";
import link from './../components/ui/link';
import meteor from './../components/icons/meteor';
import makeElement from "./../utils/makeElement";
import errorMsg from "./../components/ui/errorMsg";

//Page not found page
const pageNotFound = function() {
    const notFoundContent = document.createElement('div')
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('error-image')
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('link-container')    
    
    const brand = branding()

    const image = makeElement(meteor())
    imgContainer.append(image)

    const message = errorMsg('404', 'Seems like you\'re looking for something that isn\'t here...')
    
    const linkElm = link('go back!!', '/')
    linkContainer.append(linkElm)

    notFoundContent.append(brand)
    notFoundContent.append(imgContainer)
    notFoundContent.append(message)
    notFoundContent.append(linkContainer)
    return notFoundContent
}

export default pageNotFound