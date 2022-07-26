# Class 12 - Create and Delete

## Warm Up

See warm up folder.

## Code Review

* Validating that you can connect to local / remote mongo DB.
* Volunteer for Code Review (Mandy!)
* Mongoose - Connects our JS to a Mongo DB.
* Modulizing our Mongoose models / general server modules.

```javascript


db.once('open', () => {

});


async function _seed(){

  try {
    await Book.create({
      title: 'Jurassic Park',
      description: 'A group of scientists visit an island where a visionary millionaire has created a theme park with actual dinosaurs and things go awry!',
      status: true, 
    });
    await Book.create({
      title: 'Ender\'s Game',
      description: 'The novel tells the story of a young boy, Ender Wiggin, who is sent to a training academy named Battle School, located in orbit above the Earth, built to train people to become soldiers that will one day battle against a vast alien race known as "Buggers"',
      status: true,
    });
    await Book.create({
      title: 'Station Eleven',
      description: 'A post-apocalyptic thriller following a father and son making their away across a desolate world',
      status: false,
    });
    mongoose.disconnect();
  } catch (e) {
    console.log(e);
  }
};

```

## Creating and Deleting Documents in Mongo

All requests made to our servers have been using the GET.

- Each verb should represent a different outcome for the server.
  - GET: READ - mongoose method to READ
  - POST: CREATE - mongoose method to CREATE
  - DELETE: DELETE - mongoose method to DELETE
- All data read from the request has been included in the request query parameters:
  `http://localhost:3030/books?title=EnderGame`
- Today we will get data from the request `body` / request `params`.
  - Body: any extra data that is attached to the request.
    - this will be JSON for now.
  - Params: similar to the query, instead of being optional values attached to thee URL they are required and defined server side.
  `http://localhost:3030/books/EndersGame` - server dictates the parameter name.

* GET - Reads data from somewhere.
* POST - Creating data.
* DELETE - Deletes data.