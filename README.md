# Pixel8 Node Express Exercise

The goal of this exercise is to complete a partially-built Node/Express REST API and server-side rendered EJS web
application, so that the user can enter text in the browser and, upon clicking the "Pixel8" button, see their entered
text displayed in a pixel font.

Input:

`Pixel8`

Output:

```
###  # #   # #### #    ## 
#  # #  # #  #    #   #  #
###  #   #   ###  #    ## 
#    #  # #  #    #   #  #
#    # #   # #### ###  ## 
```


## Getting Started

To begin, clone this repository and install dependencies:

```bash
$ git clone https://github.com/sscovil/express-exercise.git && cd express-exercise && npm install
```

Run the app using:

```bash
$ npm start
```

When code is changed, the server will automatically restart using [Nodemon](https://nodemon.io/).

To view the app in a browser, visit http://localhost:8080


## Server Side

The application stack looks like this:

```
server.js
|
|_public
| |
| |_scripts
| |
| |_styles
|
|_controllers
  |
  |_views
  |
  |_services
    |
    |_lib
```

The main file, `server.js`, defines routes that the server recognizes. It serves static files from the `/public`
directory (and certain distribution directories in `/node_modules`), and uses the [EJS](http://ejs.co/) templating
language to render views located in the `/views` directory (rendered by `/controllers/view-controller.js)`.

There is only one REST API endpoint: `GET /pixelate`

This endpoint is handled by `/controllers/text-controller.js`, which is not yet wired up but should pass the `text`
value from `req.body` to a function in `/services/text-service.js` that will handle converting the text to a string
using `/lib/pixel-font.js`. The return value should be HTML encoded and returned in the response body.


## Client Side

There is a single view file, `/views/home.ejs`, which gets rendered when you visit http://localhost:8080. In the HTML
`<head>` section, a few CSS and JavaScript files are loaded:

* `/styles/bulma.min.css` [Bulma](https://bulma.io/) CSS framework (dynamically loaded from `/node_modules`)
* `/styles/home.css` An empty CSS file where custom styles can be added
* `/scripts/axios.min.js` [Axios](https://github.com/axios/axios) HTTP client (dynamically loaded from `/node_modules`)
* `/scripts/home.js` An empty JavaScript file where custom functions can be added

The web is not yet wired up, but when the submit button is clicked it should pass the contents of the text input to
the REST API endpoint `GET /pixelate` and render the response in the `<pre id="result"></pre>` block.
