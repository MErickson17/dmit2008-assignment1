# Night C Arts - Todo List App
## Night C Arts
My brand name is based off of the screen name I use when I draw and post art.

## About the Application
This application is a basic todo list app that uses local data. It has been created by using vanilla javascript and styled using scss.

## How to start and run the project
* To start the app with a locally downloaded copy, first run `npm install` in the terminal to install all project modules. Then run `npm start` to start http-server and run the project on a local server. 
  * On the home page, click "to do app" to view the app page. On this page you can choose to add, edit, or delete a todo item.

* To access the project online, visit the website, deployed to Netlify, [here](https://nightcarts.netlify.app/).
  * On the home page, click "to do app" to view the app page. On this page you can choose to add, edit, or delete a todo item.

## Notes
*  `heading.js` is used to make the h1 heading for the header.
* Created `branding.js` to hold a header component used on all pages. Uses:
  * `logo.js`
  * `heading.js`
  * `tagline.js`
* Created the `netlify.toml` in order for netlify to use the Router built into my app, and use my `pageNotFound.js` for the error page.
* The forms created for add and edit do not allow the user to make any changes to it, therefore they are not labled as 'required' on the page.
* The only form validation in this version of the project ensures that something has been entered/selected in the required fields. Validation is done through javascript when the user clicks the add or edit todo button.