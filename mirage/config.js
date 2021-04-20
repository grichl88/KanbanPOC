export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.get('/kanapp/api/work-types', (schema, request) => {
    return schema.workTypes.all();
  });

  this.post('/kanapp/api/work-types', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).workTypes;
    return schema.workTypes.create(attrs);
  });

  this.get('/kanapp/api/assignments', (schema, request) => {
    return schema.assignments.all();
  });

  this.get('/kanapp/api/assignments/:id', (schema, request) => {
    return schema.assignments.find(request.params.id);
  });

  this.post('/kanapp/api/assignments', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).assignments;
    return schema.assignments.create(attrs);
  });

  this.del('/kanapp/api/assignments/:id', (schema, request) => {
    return schema.assignments.find(request.params.id).destroy();
  });

  this.patch('/kanapp/api/assignments/:id');

  this.get('/kanapp/api/creators/:id', (schema, request) => {
    return schema.creators.find(request.params.id);
  });

  this.patch('/kanapp/api/creators/:id');

  this.get('/kanapp/api/assignees/:id', (schema, request) => {
    return schema.assignees.find(request.params.id);
  });

  this.patch('/kanapp/api/assignees/:id');
}
