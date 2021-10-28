import link from './../components/ui/link';
import branding from './../components/branding'; //makes use of heading.js, icon.js, and tagline.js

// home page
const home = function() {

    const homeContent = document.createElement('div')
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('link-container')

    const brand = branding()    
    const linkElm = link('to do app', '/todo')

    linkContainer.append(linkElm)
    homeContent.append(brand)
    homeContent.append(linkContainer)   

    return homeContent
}

export default home