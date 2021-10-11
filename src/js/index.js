import Router from "./routes/router"
//linked to the web document; inject our app into the html

const app = document.querySelector('#app')
Router(window.location.pathname)