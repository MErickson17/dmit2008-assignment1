import home from "./../pages/home";
import pageNotFound from "./../pages/pageNotFound";
import toDoPage from "./../pages/toDoPage";

const routes = {
    "/":home(),
    "/toDoPage":toDoPage(),
    "/pageNotFound":pageNotFound()
}

const Router = function(pathname) {
    

    //loading and unloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = '' //clears out what is currently in app

    //if I decide to check if the pathname exists in routes
    //I should do it here; if it does include what's currently below...
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname //give the first part of the url and the path name
    )

    app.appendChild(routes[window.location.pathname])
}

export default Router
export {routes}