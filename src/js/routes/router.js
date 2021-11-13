import home from "./../pages/home";
import pageNotFound from "./../pages/pageNotFound";
import toDoPage from "./../pages/toDoPage";
import deletePage from "./../pages/delete";
import editPage from "./../pages/edit";
import addPage from "./../pages/add";

const routes = {
    "/":home,
    "/todo":toDoPage,
    "/delete":deletePage,
    "/edit":editPage,
    "/add":addPage
}

const Router = function(pathname, params=null) {
    
    const isValidRoute = Object.keys(routes).find(key => key === pathname)

    //loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = '' //clears out what is currently in app

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname //give the first part of the url and the path name
    )

    if(isValidRoute === undefined) {
        app.appendChild(pageNotFound())
    } else {
        app.appendChild(routes[window.location.pathname](params))
    }
    
}

export default Router
export {routes}