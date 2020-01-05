

### FOLDER STRUCTURE:

```
project/
  config/           # config files
  controllers/
    users.js
  util/
    plugin.js
  middlewares/
    auth.js
  models/
    user.js
  routes/
    user.js
    router.js
  tests/
    users/
      create-user-test.js 
      update-user-test.js
      get-user-test.js
  .gitignore
  index.js
  package.json
  ```


- controllers: Define your app route handlers and business logic
- util: Writes utility/helper functions here which can be used by any controllers. For example, you can write a function like mergeTwoArrays(arr1, arr2).
- middlewares: You can write middlewares to interpret all incoming requests before moving to the route handler. For example,
```
router.post('/login', auth, controller.login) where auth is a middleware function defined in middlewares/auth.js.
```
- models: also a kind of middleware between your controller and the database. You can define a schema and do some validation before writing to the database. For example, you can use an ORM like Mongoose which comes with great features and methods to use in the schema itself
- routes: Define your app routes, with HTTP methods. For example, you can define everything related to the user.

```
router.post('/users/create', controller.create)
router.put('/users/:userId', controller.update)
router.get('/users', controller.getAll)
```

- tests: Here you can write all the unit tests or acceptance tests for the API server.
- index.js: Acts as the main file of the project where you initialize the app and other elements of - project.
- package.json: Takes care of the dependencies, the scripts to run with the npm command, and the version of your project.