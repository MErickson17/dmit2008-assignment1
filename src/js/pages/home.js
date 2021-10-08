import link from './../components/link';
import heading from './../components/heading';
import logo from './../components/logo';
import makeElement from './../utils/makeElement';

// home page

const home = function() {
    const header = document.createElement('header')
    header.classList.add('ui-page-header')
    const icon = makeElement(logo);
    const h1 = heading('h1', 'Night C Arts')
    const linkElm = link('to do app', '/toDoPage')
    header.append(icon)
    header.append(h1)
    header.append(linkElm)

    return header
}

export default home