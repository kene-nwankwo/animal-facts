Practice React Application

Run `npm audit` for details.
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd animal-facts
  npm start

Instructions:

Do the following:

Create a React application (with Typescript). 

This app will be a way for users to learn more about various animals. 

Have a navigation bar at the top that allows a user to toggle between seeing: 
-random facts about cats
-random facts about dogs
-random dog and cat pictures
-random facts and pictures of zoo animals

The nav bar should cause the current URL to change using React Routing.

Each of the different categories above should be accessible by typing in the base url (like localhost:5173 or something like that) and then /cat-facts, /dog-facts, /dog-pictures, /cat-pictures, and /zoo-facts-and-pictures. So for example to see the random cat facts I would navigate to localhost:5173/cat-facts (the number after the colon in localhost:5173 might change when you run locally).

For all of your buttons please use components from https://mui.com/.

For the animal facts and pictures use the API's listed here: https://github.com/public-apis/public-apis#animals.

The actual styling of the site is up to you, but those are the base requirements.