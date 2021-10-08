import home from "./../pages/home";
import pageNotFound from "./../pages/pageNotFound";
import toDoPage from "./../pages/toDoPage";

const Router = function(pathname) {
    const routes = {
        "/":home(),
        "/toDoPage":toDoPage(),
        "/pageNotFound":pageNotFound()
    }

    //loading and inloading pages into the div app
    const app = document.querySelector('#app')
    app.innerHTML = '' //clears out what is currently in app

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname //give the first part of the url and the path name
    )

    app.appendChild(routes[window.location.pathname])
}

export default Router
export {routes}