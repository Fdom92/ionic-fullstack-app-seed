## Ionic Fullstack Seed

A seed to quickstart in fullstack mean applications with ionic

## Technology Stack

* **[Gulp](http://gulpjs.com/)** - Automate and enhance your workflow.
* **[Ionic](http://ionicframework.com/)** - Advanced HTML5 Hybrid Mobile App Framework.
* **[Mongoose](http://mongoosejs.com/)** - Elegant mongodb object modeling for node.js
* **[MongoDB](https://www.mongodb.com/)** - Agile NoSQL database.
* **[Express](http://expressjs.com/)** - Fast, unopinionated, minimalist web framework for Node.js.
* **[Angular](https://angularjs.org/)** - Superheroic JavaScript MVW Framework.
* **[NodeJS](https://nodejs.org/)** - Platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

## Requirements and Install

Node.js and MongoDB installed at least.

#Server

```
$ npm install
$ node server.js
```
And open your browser on `http://localhost:8080`

#Client

```
$ npm install && bower install
```

Run the app
```
$ gulp
```

Build the app
```
$ gulp -b
```
This ionic application its from [tmaximini repo](https://github.com/tmaximini/ionic-gulp-seed)

## Folder structure

```
.
├── /app/                         # API REST code (Express and Mongoose)
│   ├── /controllers/             # Express controllers
│   └── /models/                  # Mongoose data models
├── /config/                      # Settings for connection to the database
├── /node_modules/                # Node Modules and 3rd-party libraries
├── /public/                      #
│   ├── /app/                     # Source code of the application (Ionic and AngularJS)
│   ├── /bower_components/        # Bower Modules and 3rd-party libraries
│   ├── /hooks/                   # Scripts used to customize cordova commands
│   ├── /node_modules/            # Node Modules and 3rd-party libraries
│   ├── /resources/               #
│   └── /test/                    #
├── package.json                  # App manifest and list of libraries installed
├── README.md                     # README
└── server.js                     #
```
