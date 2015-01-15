/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    /*
     * FIXME(azirbel): Added unsafe-inline to remove warnings.
     *
     * CSP "unsafe" inline styles seem to be used for table rows somehow, I
     * haven't tracked it down. This is probably ok for now, but could probably
     * be cleaned up.
     *
     * We allow ghbtns.com to show the "Github stars" widget.
     * We allow avatars.githubusercontent.com and api.github.com for the Ajax
     * table example.
     *
     * NOTE: This is used by ember-cli-content-security-policy.
     */
    contentSecurityPolicy: {
      'default-src': "ghbtns.com",
      'script-src': "'self' api.github.com",
      'font-src': "'self'",
      'connect-src': "'self'",
      'img-src': "'self' avatars.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
