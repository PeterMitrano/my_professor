var AlexaSkill = require("./AlexaSkill");

/** this can be found on the amazon developer page for the skill */
var APP_ID = 'amzn1.echo-sdk-ams.app.5e07c5c2-fba7-46f7-9c5e-2353cec8cb05';

/**
 * Represents a the overall skill object.
 * @constructor
 */
var MyProfessor = function() {
  AlexaSkill.call(this, APP_ID);
};

MyProfessor.prototype =  Object.create(AlexaSkill.prototype);
MyProfessor.prototype.constructor = MyProfessor;

/** called when the user makes their first request per session.
 * Could be as simple as "Alexa, ask my_professor"
 * @param sessionStartedRequest the request body
 * @param session session object useful for tracking within a session
 */
MyProfessor.prototype.eventHandlers.onSessionStarted =
  function(sessionStartedRequest, session) {

  console.log("on Sessiont Started. request id:" +
      sessionStartedRequest.requestId +
      " session id:" +
      session.sessionId);
};

/** called when the user invokes our skill with no intent.
 * IE "Alexa, ask my professor" */
MyProfessor.prototype.eventHandlers.onLaunch =
  function(launchRequest, session, response) {

  var output = "Hello, I'm the Professor." +
    " You can ask me when your next class is or what your next class is. " +
    " I can also tell you when you need to leave in order to get on time.";

  var reprompt = "Ask me when your next class is.";

  response.ask(output, reprompt);

  console.log("onLaunch requestId: " +
      launchRequest.requestId +
      ", sessionId: " +
      session.sessionId);
};

/** called when the user launches with one of the specified intents **/
MyProfessor.prototype.intentHandlers = {

  NextClassIntent: function(intent, session, response) {
    response.tell("your next class is physics.");
  },

  ListClassesIntent: function(intent, session, response) {
    response.tell("your classes are physics 1001 and chemistry 1001");
  },

  AMAZONStartOverIntent: function(intent, session, response) {
    console.log("intent: AMAZONStartOverIntent");
    response.tell("ughhh this is going to take forever.");
  },

  AMAZONRepeatIntent: function(intent, session, response) {
    console.log("intent: AMAZONRepeatIntent");
    response.tell("I shouldn't have to repeat myself");
  },

  AMAZONHelpIntent: function(intent, session, response) {
    console.log("intent: AMAZONHelpIntent");
    response.tell("no help for you!");
  },

  AMAZONYesIntent: function(intent, session, response) {
    console.log("intent: AMAZONYesIntent");
  },

  AMAZONNoIntent: function(intent, session, response) {
    console.log("intent: AMAZONNoIntent");
  },

  AMAZONStopIntent: function(intent, session, response) {
    console.log("intent: AMAZONStopIntent");
  },

  AMAZONCancelInten: function(intent, session, response) {
    console.log("intent: AMAZONCancelInten");
  }
};

/** the function that alexa will call when envoking our skill.
* The execute method essentially dispatches to on of our session handlers */
exports.handler = function(event, context) {
  var skill = new MyProfessor();
  skill.execute(event, context);
};
