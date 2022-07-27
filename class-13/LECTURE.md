# Class 13 - Updating Resources

## Announcements

* Tomorrow is Diversity and Inclusion (Make sure to do the readings)
* 401 Entrance Exam is Friday (July 29th).

## Warm Up

See warm up folder

## Code Challenge (Regex part 2)

## Code Review!

* DELETE server side, but react still shows the item.
  * What is the source of truth.
    * If succesful delete occurs, how does the front end get it's state to match the DB state.
      * On succcessful request, take the Book passed to the backend and remove from front end state.
      * Make a GET /books as soon as a successful delete occurs.
* Stretch Goal - Getting the button to not be pressable until request finishes.

## Update Routes

Updating has some nuance, there are 3 options that we have when updating a single object:

1 - Partial update to an existing object.
2 - Full replacement to an existing object.
  3 - When attempting a full replace, we want to add a new object, if one isn't found.

### Server Routing

PATCH - `/resource/:resourceid` -> partial replacement
  - `let pokemonFromDB = await Pokemon.find();`
  - `pokemonFromDB.name = request.body.name`
  - `pokemonFromDB.save()`.
PUT - `/resource/:resourceid` -> full replacement
```javascript
  let newPokemon = await Pokemon.findOneAndReplace(
    {_id: request.params.resourceId},
    request.body,
    { new: true }
  )`
```
  -  `response.send(newPokemon);

###  Client Side

```javascript

let pokemonValues = {
  ap: 100,
}

axios.patch('/resource/2378462865', pokemonValues).then(response.data);


```