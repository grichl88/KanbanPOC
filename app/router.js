import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('page-not-found', { path: '/*path' });
  this.route('board', { path: '/board' });
  this.route('assignment', { path: '/assignment/:assignment_id' });
});
