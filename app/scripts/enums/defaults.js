'use strict';

PhonicsApp.config(function ($provide) {

  $provide.constant('defaults',

  // BEGIN-DEFAULTS-JSON
  {
    /*
     * Code generator endpoints s are used for generating servers and client
     * Swagger Editor will GET list of server and client generators and POST to
     * each `server` and `client` with Swagger document in body to download the
     * product of the code generator.
    */
    codegen: {
      /*
       * Menu items are generated based on result of GET request to these
       * endpoint
      */
      servers: 'http://generator.wordnik.com/online/api/gen/servers',
      clients: 'http://generator.wordnik.com/online/api/gen/clients',

      /*
       * For each item in menu item, Swagger Editor will make calls to these
       * endpoint to download the generated code accordingly
      */
      server: 'http://generator.wordnik.com/online/api/gen/servers/{language}',
      client: 'http://generator.wordnik.com/online/api/gen/clients/{language}'
    },

    /*
     *  Disables Code Generators
    */
    disableCodeGen: true,

    /*
     * Folder that example files are located
    */
    examplesFolder: '/spec-files/',

    /*
     * List of example files to show to user to pick from. The URL to fetch each
     * example is a combination of `examplesFolder` and file name
    */
    exampleFiles: [
      'default.yaml',
      'heroku-pets.yaml',
      'minimal.yaml',
      'petstore_simple.yaml',
      'petstore_full.yaml',
      'security.yaml'
    ],

    /*
     * Keywords for auto-complete are generated from a JavaScript object.
     * See keyword-map.js for object format
    */
    autocompleteExtension: {},

    /*
     * Use a back-end for storing the document instead of browser local storage
    */
    useBackendForStorage: false,

    /*
     * URL of the Back-end for storing swagger document. Editor will PUT and GET
     * to this URL to **Save** and **Read** the Swagger document
    */
    backendEndpoint: '/editor/spec',

    /*
     * When using a back-end, editor checks if back-end is still reachable in an
     * interval. This interval is in milliseconds
    */
    backendHelathCheckTimeout: 5000,

    /*
     * When using a back-end, editor by default PUTs JSON document for Saving.
     * Enable this to use YAML instead
    */
    useYamlBackend: false,

    /*
     * Disables File menu which includes New, Open Example and Import commands
    */
    disableFileMenu: false,

    /*
     * Disables editing, removes all menu bar
    */
    disableEditing: /\.vitals\.com$/.test(window.location.host),

    /*
     * When it's enabled:
     *  * Editor will append `brandingCssClass` class to body tag
     *  * Editor will include branding templates at
     *      app/templates/branding-left.html and
     *      app/templates/branding-left.html
     *       to it's header
    */
    headerBranding: true,

    /*
     * Enables Try Operation functionality
    */
    enableTryIt: false,

    /*
     * Disable new user intro
    */
    disableNewUserIntro: true,

    /*
     * When `headerBranding` is enabled, this will be appended to body tag
    */
    brandingCssClass: '',

    /*
     * Swagger Schema URL for extra validation and vendor extension validation
     * Note: Vendor extension validation is not yet implemented (TODO)
    */
    schemaUrl: '/schema/swagger.json',

    /*
     * When Editor imports a file from a URL, it will prepend this URL to make
     * it possible to import contents that are not allowed to be loaded from a
     * different origin. If you're hosting your own editor, please replace this
    */
    importProxyUrl: ''
  }
  // END-DEFAULTS-JSON

  );
});
