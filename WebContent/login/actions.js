// actions.js
// list of all the action verbs in core Gemini
// there will be more for each individual game; these are the core ones

// map of verbs to IDs
var ACTIONS = new Object();

// where to register UI handlers for replied messages.
var UI_HANDLERS = new Object();

// Where to register system handlers. These get executed before UI handlers.
var SYSTEM_HANDLERS = new Object();

ACTIONS.hello_world = 0;

ACTIONS.login = 1;


ACTIONS.poll = 999;