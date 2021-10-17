# DMIT2008 - Assignment 1 - Todo List
## Night C Arts
My "company" name is based off of the screen name I use when I draw & post art.

## Notes
* From the assignment outline, I renamed `header.js` to `heading.js` as I felt it made more sense as that component is used to make the h1 heading for the header.
* Created `branding.js` to hold a header component used on all pages. Uses:
  * `logo.js`
  * `heading.js`
  * `tagline.js`

## How to start and run the project
* To start the app with a locally downloaded copy, first run `npm install` in the terminal to install all project modules. Then run `npm start` to start http-server and run the project on a local server. 
  * On the home page, click "to do app" to view the app page. [In the current version of the project, add, edit, and trash buttons are visible, but currently do not function.]

* To access the project online, visit the website, deployed to Netlify, [here](https://determined-edison-cc9142.netlify.app/).
  * On the home page, click "to do app" to view the app page. [In the current version of the project, add, edit, and trash buttons are visible, but currently do not function.]

## Front end javascript starter kit
```bash
.
├── Readme.md
├── package-lock.json
├── package.json
├── src
│   ├── assets
│   │   ├── svg
│   ├── css
│   ├── index.html
│   ├── js
│   │   └── index.js
│   │   └── components
│   │   └── data
│   │   └── pages
│   │   └── router
│   │   └── utils
│   └── scss
└── svgo.config.json
```