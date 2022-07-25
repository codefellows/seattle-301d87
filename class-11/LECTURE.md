# Class 11 - Mongo and Mongoose (NoSQL db / ORM)

## Announcements

- 401 entrance Exam this Friday.
- 1 on 1 meetings with me!
  - 1 on 1 instructor synch assignment.
- No Lab on Thursday(for now).

## Conceptual Review

- React / ES6
  - What is an ES6 class?
    - Uses inheritance (prototypal inheritance).
    - Newer Constructor Function syntax.
    - To organize / create / constructs an Object.
  - What is a React Component?
    - Classes that we use to build an interface.
    - Pieces that make up what the use sees and interacts with.
  - What is the `super` function?
    - Runs inside the constructor of a class.
    - What does it do?
      - Use it to access the properties and methods of the parent.
      - Activates extended classes constructor.
  - Component State?
    - Information that is localized to the component.
  - Component Props?
    - Information passed from a parent to a child component.
    - Inputs from one component into the component we are creating / using.
  - Async Code
    - What is asyncronicity in JS?
      - Code that doesn't operate in unison.
      - Lines of code execute independant of when they are called.
    - How does the JS engine manage async code?
      - Pausing the async stuff, runs other code, and comes back when it's finished.
      - Callstack + Event Loop.
- Node
  - Open Source Runtime (server environment) for JS.
  - Allows our computer to interpret and actually do things.
    - Access our filesystem.
    - Configure a Server.
- Express (Framework)
  - Backend -> Builds our application
  - HTTP (Request -> Response) API
    - What are the 2 things that express needs to handle a single request.
      - URL (path) - where is the server located.
      - GET (verb) - what do I do with the request.
  - Uses a Request and Response Object.

## Chaining Methods

```javascript

// converts an object to an array of keys -> map returns a new array -> filter returns a filtered array
Object.keys(obj).map().filter()

```

## Databases and CRUD (NoSQL vs SQL)

## DEMO: Using Mongoose ORM