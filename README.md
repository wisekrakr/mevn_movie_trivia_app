MEVN Stack Movie Trivia App



This project uses:

Mongo for a NoSQL database.

Express For an HTTP Server (backend framework)

VueJS For Views, with the Vuetify Material Design Framework

Vuex for state management

Node For a JavaScript runtime


**/ Getting Started /**

cd <dir name>

npm install

Split the project into two parts: 1. a server side (express/ mongodb/ node) 2. client side (vue/ vuex/ vuetify)

To develop using this project you can run

npm run serve --- in client folder (made automatically by vue === vue create client) You can also start the frontend by:
vue ui --- this will initiatie a vue gui in your browser where you can install dependencies or start your server for instance.

and

npm run start --- in server folder

I used mlab to store my database. (https://cloud.mongodb.com)



/server

--/middleware/-- Any middleware you may need can go here.

--/models/-- Contains the models for our API Resources using Mongoose.

--/routes/-- All route definitions are here.

----/api.js-- Routes for the API.

----/auth.js-- Routes specific to the user authentication.
----/user.js-- Routes specific to the user resource.
----/questions.js-- Routes specific to the question resource.

Frontend

/client

--/components/-- Vue components

--/views/-- Separate Component Pages go here.

--/router/index.js-- Config for vue-router

--/App.vue-- Component that has a Header and an app wrapper

--/main.js-- Registers the Vue components and Router

--/index.html-- The file we return, has the Vue app in it.

--/store/index.js-- Vuex store

--/plugins/vuetify.js-- Vuetify 

--/services/-- Connection to axios http requests

Requirements

This project will require:

    Node >=11.0

Dependencies

    Dependencies Via NPM
        Axios For client side HTTP requests
        cors For CORS during development        
        vue Realtime data binding on the frontend
        vuetify Material design for Vue
        vue-router Router for the SPA
        vuex as the State Manager
        mongoose for schema's (document structure)


