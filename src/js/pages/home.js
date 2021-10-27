import link from './../components/ui/link';
import branding from './../components/branding'; //makes use of heading.js, icon.js, and tagline.js

// home page

const home = function() {
    // const header = document.createElement('header')
    // header.classList.add('ui-page-header')
    // const icon = makeElement(logo());
    // const h1 = heading('Night C Arts')
    // const linkElm = link('to do app', '/toDoPage')
    // header.append(icon)
    // header.append(h1)
    // header.append(linkElm)

    // return header

    const homeContent = document.createElement('div')
    //potentially add a class to make it centered in the page
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