import Router from "./routes/router";
import dataFetcher from "./utils/dataFetcher";
import { createStore } from "./redux/store";

//linked to the web document; inject our app into the html
const app = document.querySelector('#app')
Router(window.location.pathname)

const onAppInit = async function(e){
    let toDos = await dataFetcher('./data/todos.json')

    createStore(toDos)
}

window.addEventListener('load', onAppInit)